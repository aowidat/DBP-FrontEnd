import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";

function Product() {
    let { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => { fetch(`http://localhost:8080/findById/${id}`).then(res => res.json()).then(data => setData(data)); }, []);
    return (
        <div>
            {data?.id}
            <br />
            {data?.title}
            <br />
            {data?.salesRank}
            <br />
            {data?.image}
            <br />
            {data?.rating}
            <br />
            {data?.format}
            <br />
            {data?.binding}
            <br />
            {data?.disc_Nr}
            <br />
            {data?.date}
        </div>
    );
}
export default Product;
