/* eslint-disable react/jsx-key */
import "./AllArrivals.css";
import { useEffect, useState } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import { Link } from "react-router-dom";

const AllArrivals = () => {
  const dispatch = useDispatch();

  const [products, getProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      getProducts(data);
      console.log(data);
    } catch (error) {
      console.log("Error occurs", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    <div className="complete_arrivals">
      <h2 className="heading_text">
        Elevate your style game with the trendiest threads straight from our
        newest collection.
      </h2>

      <div className="allData">
        {products.map((item) => (
          <div className="new_card1">
            <Link to={`/product/${item.id}`} className="new_card" key={item.id}>
              <img src={item.image} alt="" className="card_img" />

              <p className="item_title">{shortenTitle(item.title, 40)}</p>
              <h3 className="card_price">Rs{item.price}</h3>
            </Link>

            <button onClick={() => addToCart(item)} className="addToCart">
              <img src={Add_To_Cart} alt="" /> Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArrivals;
