import { useState } from "react";
import {
    Link
} from "react-router-dom";

function Home() {
    const [id, setId] = useState('');
    const [pattern, setPattern] = useState('');
    const [sim, setSim] = useState('');
    const [path, setPath] = useState('');
    return (
        <div className="p-3 text-center">
            <Link to="/user">
                getTroll
            </Link>
            <br />
            <Link to="/categoriestree">
                getCategoriesTree
            </Link>
            <br />
            <div className="p-3 text-center">
                <Link to={`/review/all/nnn`}>
                    get all Reviews
                </Link>
            </div>
            <br />
            <div className="p-3 text-center">
                <Link to={`/product/byId/${id}`}>
                    getProduct by ID
                </Link>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="p-3 text-center">
                <Link to={`/product/bypattern/${pattern}`}>
                    getProduct by Pattern
                </Link>
                <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} />
            </div>

            <div className="p-3 text-center">
                <Link to={`/product/allproduct/nnn`}>
                    get all products
                </Link>
            </div>

            <div className="p-3 text-center">
                <Link to={`/product/similars/${sim}`}>
                    similar cheaper
                </Link>
                <input type="text" value={sim} onChange={(e) => setSim(e.target.value)} />
            </div>
            <div className="p-3 text-center">
                <Link to={`/product/byPath/${path}`}>
                    Products by path
                </Link>
                <input type="text" value={path} onChange={(e) => setPath(e.target.value)} />
            </div>

            <div className="p-3 text-center">
                <Link to={`/product/topproduct/nn`}>
                    Top Products
                </Link>
            </div>
        </div>
    );

}
export default Home;
