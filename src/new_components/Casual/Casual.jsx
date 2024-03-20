/* eslint-disable react/prop-types */

import "./Casual.css";
import { useEffect } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import { Link } from "react-router-dom";

const Casual = ({ data, headline }) => {
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
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
      <h2 className="heading_text">{headline}</h2>

      <div className="allData">
        {data.map((item) => (
          <div className="new_card1" key={item.id}>
            <Link to={`/${item.category}/${item.id}`} className="new_card">
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

export default Casual;
