import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function ListOfReviews() {
  const columns = [
    {
      field: "id",
      headerName: "id",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "product_id",
      headerName: "Product ID",
      headerAlign: "center",
      align: "center",
      flex: 1,
      valueGetter: () => {
        let result = id;
        return result;
      },
    },
    {
      field: "store",
      headerName: "Store",
      headerAlign: "center",
      align: "center",
      flex: 1,
      valueGetter: (params) => {
        let result = params.row.store.name;
        return result;
      },
    },
  ];
  const [products, setProducts] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/product/GetOffers/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products && (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          columnSizer="Star"
          rowsPerPageOptions={[10]}
          components={{
            Toolbar: GridToolbar,
          }}
          showCellRightBorder={true}
          autoHeight
        />
      )}
    </>
  );
}
