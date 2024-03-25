// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Sale from "./new_components/Sale/Sale";
import Shop from "./new_components/Shop/Shop";
import Brands from "./new_components/Brands/Brands";
import Header from "./new_components/Header/Header";
import Cart from "./new_components/Cart/Cart";
import Account from "./new_components/Account/Account";
import Home from "./new_components/Home/Home";
import Footer from "./new_components/Footer/Footer";
import AllArrivals from "./new_components/Complete_Arrivals/AllArrivals";
import Product from "./new_components/ProductDetails/Product";
import AllSelling from "./new_components/Complete_Selling/AllSelling";
import Details from "./new_components/SellingDetails/Details";
import Casual from "./new_components/Casual/Casual";
import CasualData from "./new_components/Casual/CasualData";
import PartyData from "./new_components/Casual/PartyData";
import FormalData from "./new_components/Casual/FormalData";
import GymData from "./new_components/Casual/GymData";
import Data from "./new_components/Complete_Selling/Seller";
import CheckoutPage from "./new_components/CheckoutPage/CheckoutPage";
// import Style from "./new_components/Style/Style";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="sale" element={<Sale />} />
        <Route path="/arrival" element={<AllArrivals />} />
        <Route path="/selling" element={<AllSelling />} />
        <Route path="brands" element={<Brands />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Account />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/selling/:id" element={<Details data={Data} />} />

        <Route path="/formal/:id" element={<Details data={FormalData} />} />
        <Route path="/casual/:id" element={<Details data={CasualData} />} />
        <Route path="/party/:id" element={<Details data={PartyData} />} />
        <Route path="/gym/:id" element={<Details data={GymData} />} />

        <Route
          path="/casual"
          element={
            <Casual
              data={CasualData}
              headline=" Stay Comfortable, Stay Stylish: Dive into Casual Luxury!"
            />
          }
        />
        <Route
          path="/formal"
          element={
            <Casual
              data={FormalData}
              headline="Classic Elegance, Modern Edge: Shop Our Formal Collection!"
            />
          }
        />

        <Route
          path="/party"
          element={
            <Casual
              data={PartyData}
              headline="Lights, Camera, Fashion: Get Ready to Steal the Spotlight with our party collection!"
            />
          }
        />

        <Route
          path="/gym"
          element={
            <Casual
              data={GymData}
              headline="From Workouts to Runways: Rock Your Gym Look!"
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
