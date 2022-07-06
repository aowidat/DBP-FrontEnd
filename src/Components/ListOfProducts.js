import * as React from "react";
import {
  DataGrid, GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Avatar, Button, createTheme } from "@mui/material";
import NotFound from './NotFound';
import { ThemeProvider } from "@emotion/react";


function renderRating(params) {
  return <Rating readOnly precision={0.25} value={params.value} />;
}

function renderImage(params) {
  return <Avatar readOnly src={params.value} />;
}

export default function ListOfProducts() {
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: renderImage,
    },
    {
      field: "id",
      headerName: "id",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: renderRating,
    },
    {
      field: "salesRank",
      headerName: "salesRank",
      type: "number",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "title",
      headerName: "title",
      width: 220,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "binding",
      headerName: "Binding",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "format",
      headerName: "Format",
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "edition",
      headerName: "Edition",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "isbn",
      headerName: "ISNB",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "page",
      headerName: "Pages",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
  ];
  const myTheme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },

            '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
          },
          row: {
            "&.Mui-selected": {
              backgroundColor: "lightblue",
              color: "black",
              "&:hover": {
                backgroundColor: "lightgreen",
              },
            },
          },
        },
      },
    },
  });
  const [products, setProducts] = useState([]);
  const [isSelected, setIsSelected] = useState(true);
  const [pageSize, setPageSize] = React.useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  let { parm1, parm2 } = useParams();
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
        <Button
          variant="text"
          disabled={isSelected}
          href={`/getoffers/${selectedRows[0]?.id}`}
        >
          Offers
        </Button>
        <Button
          disabled={isSelected}
          variant="text"
          href={`/review/${selectedRows[0]?.id}`}
        >
          add review
        </Button>
      </GridToolbarContainer>
    );
  }
  useEffect(() => {
    if (parm1 === "bypattern") {
      fetch(`http://localhost:8080/product/findAllByPattern/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else if (parm1 === "byId") {
      fetch(`http://localhost:8080/product/findById/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else if (parm1 === "allproduct") {
      fetch(`http://localhost:8080/product/getAllProduct/`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else if (parm1 === "similars") {
      fetch(`http://localhost:8080/product/getSimilarCheaperProduct/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else if (parm1 === "topproduct") {
      fetch(`http://localhost:8080/product/TopProducts/`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else if (parm1 === "byPath") {
      fetch(`http://localhost:8080/category/productPerPath/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data)).then(setIsLoading(false));
    } else {
      setNotFound(true);
    }
  }, []);

  return (
    <>
      {notFound && <NotFound />}
      <ThemeProvider theme={myTheme}>
        <DataGrid
          showCellRightBorder={true}
          autoHeight
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = products.filter((row) =>
              selectedIDs.has(row.id)
            );
            setIsSelected(false);
            setSelectedRows(selectedRows);
          }}
          rows={products}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 50, 99]}
          pagination
          loading={isLoading}
          components={{
            Toolbar: CustomToolbar
          }}
        />
      </ThemeProvider>
    </>
  );
}
