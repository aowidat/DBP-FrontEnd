import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CategoriesTree from './Components/CategoriesTree';
import Review from './Components/ListOfReviews';
import User from './Components/User'
import ListOfProducts from './Components/ListOfProducts'
import ListOfOffers from './Components/ListOfOffers'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categoriestree" element={<CategoriesTree />} />
        <Route path="/product/:parm1/:parm2" element={<ListOfProducts />} />
        <Route path="/review" element={<Review />} />
        <Route path="/user" element={<User />} />
          <Route path="/getoffers/:id" element={<ListOfOffers />} />
      </Routes>
    </div>
  );
}

export default App;
