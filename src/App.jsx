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
import Search from "./new_components/Search/Search";
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
import Order from "./new_components/FinalOrder/Order";
import ShopData from "./new_components/Shop/ShopData";
import BrandData from "./new_components/Brands/BrandData";
import DesktopSearch from "./new_components/Search/DesktopSearch";
import Address from "./new_components/Address/Address";
import CartView from "./new_components/Cart/CartView";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ds" element={<DesktopSearch />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="sale" element={<Sale />} />
        <Route path="/arrival" element={<AllArrivals />} />
        <Route path="/selling" element={<AllSelling />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:id" element={<Details data={BrandData} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Details data={ShopData} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/selling/:id" element={<Details data={Data} />} />
        <Route path="/shop/:id" element={<Details data={ShopData} />} />
        <Route path="/formal/:id" element={<Details data={FormalData} />} />
        <Route path="/casual/:id" element={<Details data={CasualData} />} />
        <Route path="/party/:id" element={<Details data={PartyData} />} />
        <Route path="/gym/:id" element={<Details data={GymData} />} />
        <Route path="/view/:id" element={<CartView/>} />

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
