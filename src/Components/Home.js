import { useState } from "react";
import {
    Link
} from "react-router-dom";

function Home() {
    const [id, setId] = useState('');
    const [pattern, setPattern] = useState('');
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
            <Link to="/Review">
                getReview
            </Link>
            <br />
            <div className="p-3 text-center">
                <Link to={`/product/${id}`}>
                    getProduct by ID
                </Link>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="p-3 text-center">
                <Link to={`/listofProduct/${pattern}`}>
                    getProduct by Pattern
                </Link>
                <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} />
            </div>
        </div>
    );

}
export default Home;
