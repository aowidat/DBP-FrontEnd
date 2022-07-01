import * as React from "react";
import { DataGrid, GridToolbar, useGridApiContext } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";

function renderRating(params) {
  return <Rating readOnly value={params.value} />;
}

renderRating.propTypes = {
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.number,
};
function RatingEditInputCell(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = (event, newValue) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  const handleRef = (element) => {
    if (element) {
      const input = element.querySelector(`input[value="${value}"]`);

      input?.focus();
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
      <Rating
        ref={handleRef}
        name="half-rating-read"
        precision={0.5}
        value={value}
        onChange={handleChange}
        readOnly
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}

RatingEditInputCell.propTypes = {
  /**
   * The column field of the cell that triggered the event.
   */
  field: PropTypes.string.isRequired,
  /**
   * The grid row id.
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.number,
};

const renderRatingEditInputCell = (params) => {
  return <RatingEditInputCell {...params} />;
};

export default function ListOfProducts() {
  const columns = [
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
      renderEditCell: renderRatingEditInputCell,
      editable: true,
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
      field: "runningTime",
      headerName: "Running time",
      width: 100,
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

  const [products, setProducts] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
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
    <div style={{ height: 650, width: "100%" }}>
      {products && (
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          getRowHeight={() => "auto"}
          rows={products}
          columns={columns}
          pageSize={10}
          columnSizer="Star"
          rowsPerPageOptions={[10]}
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
          checkboxSelection
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = products.filter((row) =>
              selectedIDs.has(row.id)
            );
            setSelectedRows(selectedRows);
          }}
        />
      )}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href={`/getoffers/${selectedRows[0]?.id}`}>
          Offers
        </Button>
        <Button variant="contained" href="#contained-buttons">
          add review
        </Button>
      </Stack>
    </div>
  );
}
