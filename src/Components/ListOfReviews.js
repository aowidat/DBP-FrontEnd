import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";


export default function ListOfReviews() {
    const columns = [
        { field: 'id', headerName: 'id', width: 150 , headerAlign: "center",align: "center"},

        ]

    const [products, setProducts] = useState();
    let { parm1, parm2 } = useParams();

    useEffect(() => {
        if (parm1 === "all") {
            fetch(`http://localhost:8080/review/getReviews`).then(res => res.json()).then(data => setProducts(data));
        }
    }, []);

    return (
        <div style={ { height: 650 , width: '100%' }}>

            {products && <DataGrid
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
                }}
            />}


        </div>
    );


}
