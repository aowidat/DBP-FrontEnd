import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div>
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
            <Link to="/product/B0000668PG">
                getProduct
            </Link>
        </div>
    );

}
export default Home;
