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
    Link,
    useParams,
} from "react-router-dom";

export default function ListOfProducts() {
    const [products, setProducts] = useState();
    let { parm1, parm2 } = useParams();

    useEffect(() => {
        if (parm1 === "bypattern") {
            fetch(`http://localhost:8080/product/findAllByPattern/${parm2}`).then(res => res.json()).then(data => setProducts(data));
        } else if (parm1 === "byId") {
            fetch(`http://localhost:8080/product/findById/${parm2}`).then(res => res.json()).then(data => setProducts(data));
        } else if (parm1 === "allproduct") {
            fetch(`http://localhost:8080/product/getAllProduct/`).then(res => res.json()).then(data => setProducts(data));
        } else if (parm1 === "similars") {
            fetch(`http://localhost:8080/product/getSimilarCheaperProduct/${parm2}`).then(res => res.json()).then(data => setProducts(data));
        } else if (parm1 === "topproduct") {
            fetch(`http://localhost:8080/product/TopProducts/`).then(res => res.json()).then(data => setProducts(data));
        } else if (parm1 === "byPath") {
            fetch(`http://localhost:8080/category/productPerPath/${parm2}`).then(res => res.json()).then(data => setProducts(data));
        }
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Reviews/Offers</TableCell>
                        <TableCell align="center">id</TableCell>
                        <TableCell align="center">image</TableCell>
                        <TableCell align="center">rating</TableCell>
                        <TableCell align="center">salesRank</TableCell>
                        <TableCell align="center">title</TableCell>
                        <TableCell align="center">binding</TableCell>
                        <TableCell align="center">date</TableCell>
                        <TableCell align="center">disc_Nr</TableCell>
                        <TableCell align="center">format</TableCell>
                        <TableCell align="center">region_code</TableCell>
                        <TableCell align="center">runningTime</TableCell>
                        <TableCell align="center">theaterRelease</TableCell>
                        <TableCell align="center">edition</TableCell>
                        <TableCell align="center">isbn</TableCell>
                        <TableCell align="center">page</TableCell>
                        <TableCell align="center">height</TableCell>
                        <TableCell align="center">length</TableCell>
                        <TableCell align="center">weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <Stack spacing={1} direction="row" ><Button variant="contained">Reviews</Button>
                                <Button variant="contained" href={`/getoffers/${row?.id}`}> offers
                                </Button></Stack>
                            <TableCell align="center">{row?.id}</TableCell>
                            <TableCell align="center">{row?.image}</TableCell>
                            <TableCell align="center">{row?.rating}</TableCell>
                            <TableCell align="center">{row?.salesRank}</TableCell>
                            <TableCell align="center">{row?.title}</TableCell>
                            <TableCell align="center">{row?.binding}</TableCell>
                            <TableCell align="center">{row?.date}</TableCell>
                            <TableCell align="center">{row?.disc_Nr}</TableCell>
                            <TableCell align="center">{row?.format}</TableCell>
                            <TableCell align="center">{row?.region_code}</TableCell>
                            <TableCell align="center">{row?.runningTime}</TableCell>
                            <TableCell align="center">{row?.theaterRelease}</TableCell>
                            <TableCell align="center">{row?.edition}</TableCell>
                            <TableCell align="center">{row?.isbn}</TableCell>
                            <TableCell align="center">{row?.page}</TableCell>
                            <TableCell align="center">{row?.height}</TableCell>
                            <TableCell align="center">{row?.length}</TableCell>
                            <TableCell align="center">{row?.weight}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
