// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sale from "./new_components/Sale/Sale";
import Shop from "./new_components/Shop/Shop";
import Brands from "./new_components/Brands/Brands";
import Header from "./new_components/Header/Header";
import Cart from "./new_components/Cart/Cart";
import Account from "./new_components/Account/Account";
import Home from "./new_components/Home/Home";
import Footer from "./new_components/Footer/Footer";
import AllArrivals from "./new_components/Complete_Arrivals/AllArrivals";
// import Style from "./new_components/Style/Style";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" index element={<Home />} />
            <Route path="shop" index element={<Shop />} />
            <Route path="sale" index element={<Sale />} />
            <Route path="arrival" index element={<AllArrivals />} />
            <Route path="brands" index element={<Brands />} />
            <Route path="cart" index element={<Cart />} />
            <Route path="account" index element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Style /> */}

      <Footer />
    </div>
  );
};

export default App;
