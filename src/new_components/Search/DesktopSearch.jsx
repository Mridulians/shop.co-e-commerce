/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ShopData from "../Shop/ShopData";
import { Link, useLocation } from "react-router-dom";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";

const DesktopSearch = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  console.log(searchQuery);

  useEffect(() => {
    if (searchQuery) {
      // Filter products based on search query
      // Filter products based on search query
      const filtered = ShopData.filter(
        (product) =>
          product &&
          product.title &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filtered);
      setFilteredProducts(filtered);
    } else {
      // If no search query, display all products
      setFilteredProducts(ShopData);
    }
  }, [searchQuery, ShopData]);

  console.log(filteredProducts);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const dispatch = useDispatch();

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

  const addToCart = (item) => {
    dispatch(add(item));
    console.log(item);
  };

  return (
    <div>
      <h1 className="searchedHeading">Searched Results</h1>
      <div className="allData">
        {filteredProducts.map((items) => (
          <div className="new_card1" key={items.id}>
            <Link to={`/shop/${items.id}`} className="new_card">
              <img src={items.image} alt="" className="card_img" />

              <p className="item_title">{shortenTitle(items.title, 40)}</p>
              <h3 className="card_price">Rs{items.price}</h3>
            </Link>

            <button onClick={() => addToCart(items)} className="addToCart">
              <img src={Add_To_Cart} alt="" /> Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopSearch;
