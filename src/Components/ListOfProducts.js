import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Avatar, Button, createTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
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
  const [products, setProducts] = useState();
  const [isSelected, setIsSelected] = useState(true);
  let { parm1, parm2 } = useParams();
  useEffect(() => {
    if (parm1 === "bypattern") {
      fetch(`http://localhost:8080/product/findAllByPattern/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else if (parm1 === "byId") {
      fetch(`http://localhost:8080/product/findById/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else if (parm1 === "allproduct") {
      fetch(`http://localhost:8080/product/getAllProduct/`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else if (parm1 === "similars") {
      fetch(`http://localhost:8080/product/getSimilarCheaperProduct/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else if (parm1 === "topproduct") {
      fetch(`http://localhost:8080/product/TopProducts/`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else if (parm1 === "byPath") {
      fetch(`http://localhost:8080/category/productPerPath/${parm2}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <div style={{ height: 650, width: "100%" }}>
        {products && (
          <DataGrid
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = products.filter((row) =>
                selectedIDs.has(row.id)
              );
              setIsSelected(false);
              setSelectedRows(selectedRows);
            }}
            experimentalFeatures={{ newEditingApi: true }}
            rows={products}
            columns={columns}
            pageSize={9}
            columnSizer="Star"
            rowsPerPageOptions={[9]}
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{
              m: 5,
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        )}
        <Stack
          direction="row"
          spacing={2}
          style={{
            position: "relative",
            left: '300px',
            // top: "102%",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            variant="contained"
            disabled={isSelected}
            href={`/getoffers/${selectedRows[0]?.id}`}
          >
            Offers
          </Button>
          <Button
            disabled={isSelected}
            variant="contained"
            href={`/review/${selectedRows[0]?.id}`}
          >
            add review
          </Button>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
