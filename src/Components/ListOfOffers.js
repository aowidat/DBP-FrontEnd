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

export default function ListOfReviews() {
    const [products, setProducts] = useState();
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/product/GetOffers/${id}`).then(res => res.json()).then(data => setProducts(data));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">id</TableCell>
                        <TableCell align="center">price</TableCell>
                        <TableCell align="center">status</TableCell>
                        <TableCell align="center">product_id</TableCell>
                        <TableCell align="center">store_id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row?.id}</TableCell>
                            <TableCell align="center">{row?.price}</TableCell>
                            <TableCell align="center">{row?.status}</TableCell>
                            <TableCell align="center">{id}</TableCell>
                            <TableCell align="center">{row?.store.id}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
