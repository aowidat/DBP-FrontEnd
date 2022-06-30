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

export default function ListOfReviews() {
    const [products, setProducts] = useState();
    let { parm1, parm2 } = useParams();

    useEffect(() => {
        if (parm1 === "bypattern") {
            fetch(`http://localhost:8080/findAllByPattern/${parm2}`).then(res => res.json()).then(data => setProducts(data));
        }
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">id</TableCell>
                        <TableCell align="center">content</TableCell>
                        <TableCell align="center">date</TableCell>
                        <TableCell align="center">helpful</TableCell>
                        <TableCell align="center">rating</TableCell>
                        <TableCell align="center">summary</TableCell>
                        <TableCell align="center">person</TableCell>
                        <TableCell align="center">product_id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row?.id}</TableCell>
                            <TableCell align="center">{row?.content}</TableCell>
                            <TableCell align="center">{row?.date}</TableCell>
                            <TableCell align="center">{row?.helpful}</TableCell>
                            <TableCell align="center">{row?.rating}</TableCell>
                            <TableCell align="center">{row?.summary}</TableCell>
                            <TableCell align="center">{row?.person}</TableCell>
                            <TableCell align="center">{row?.product_id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
