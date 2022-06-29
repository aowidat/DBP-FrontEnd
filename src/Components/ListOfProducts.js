import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";

function ListOfProducts() {
    const [products, setProducts] = useState();
    let { pattern } = useParams();
    useEffect(() => { fetch(`http://localhost:8080/findAllByPattern/${pattern}`).then(res => res.json()).then(data => setProducts(data)); }, []);
    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>salesRank</th>
                        <th>image</th>
                        <th>rating</th>
                        <th>format</th>
                        <th>binding</th>
                        <th>date</th>
                        <th>disc_Nr</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(pro =>
                        <tr key={pro?.id}>
                            <td>{pro?.id}</td>
                            <td>{pro?.title}</td>
                            <td>{pro?.salesRank}</td>
                            <td>{pro?.image}</td>
                            <td>{pro?.rating}</td>
                            <td>{pro?.format}</td>
                            <td>{pro?.binding}</td>
                            <td>{pro?.date}</td>
                            <td>{pro?.disc_Nr}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default ListOfProducts;
