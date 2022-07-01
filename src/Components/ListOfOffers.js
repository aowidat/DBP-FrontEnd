import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import {Button} from "@mui/material";

export default function ListOfReviews() {
    const columns = [
        {  field: 'id', headerName: 'id', width: 150 , headerAlign: "center",align: "center"},
        {  field: 'price', headerName: 'Price', width: 150 , headerAlign: "center",align: "center"},
        {  field: 'status', headerName: 'Status', width: 150 , headerAlign: "center",align: "center"},
        {  field: 'product_id', headerName: 'Product ID', width: 150 , headerAlign: "center",align: "center" , valueGetter: () => {let result = id; return result;}},
        {  field: 'store', headerName: 'Store', width: 150 , headerAlign: "center",align: "center", valueGetter: (params) => { let result = params.row.store.id;  return result}},

    ]
    const [products, setProducts] = useState();
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/product/GetOffers/${id}`).then(res => res.json()).then(data => setProducts(data));
    }, []);


    return (

        <div style={ { height: 650 , width: '100%' }}>
            {products &&<DataGrid
                experimentalFeatures={{ newEditingApi: true }}
                getRowHeight={() => 'auto'}
                rows={products}
                columns={columns}
                pageSize={10}
                columnSizer="Star"
                rowsPerPageOptions={[10]}
                components={{
                    Toolbar: GridToolbar,
                }}
                sx={{
                    m:5,
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}/>}
        </div>
    );
}
