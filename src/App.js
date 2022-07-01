import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CategoriesTree from "./Components/CategoriesTree";
import Review from "./Components/ListOfReviews";
import ListOfUsers from "./Components/ListOfUsers";
import ListOfProducts from "./Components/ListOfProducts";
import ListOfOffers from "./Components/ListOfOffers";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "felx", md: "flex", xl: "right" },
                fontFamily: "fantasy",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Media Store
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categoriestree" element={<CategoriesTree />} />
        <Route path="/product/:parm1/:parm2" element={<ListOfProducts />} />
        <Route path="/review/:parm1" element={<Review />} />
        <Route path="/user/:parm1" element={<ListOfUsers />} />
        <Route path="/getoffers/:id" element={<ListOfOffers />} />
      </Routes>
    </div>
  );
}

export default App;
