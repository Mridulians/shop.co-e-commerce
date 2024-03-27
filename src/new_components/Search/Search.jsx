import { Link } from "react-router-dom";
import ShopData from "../Shop/ShopData";
import { useState, useEffect } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    <div className="complete_selling" style={{ paddingTop: "6rem" }}>
      <input
        className="searchInput"
        id="searchInput"
        type="text"
        placeholder="Search here for products..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="allData">
        {ShopData.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="new_card1" key={val.id}>
              <Link to={`/shop/${val.id}`} className="new_card">
                <img src={val.image} alt="" className="card_img" />

                <p className="item_title">{shortenTitle(val.title, 40)}</p>
                <h3 className="card_price">Rs{val.price}</h3>
              </Link>
              <button onClick={() => addToCart(val)} className="addToCart">
                <img src={Add_To_Cart} alt="" /> Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
