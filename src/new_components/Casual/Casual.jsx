/* eslint-disable react/prop-types */

import "./Casual.css";
import { useEffect, useState } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD , REMOVE } from "../../Reduxx/actions/action";

const Casual = ({ data, headline }) => {
  const dispatch = useDispatch();

  // console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const carts = useSelector((state) => state.cartreducer.carts);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    carts.forEach((item) => {
      initialQuantities[item.id] = item.qnty;
    });
    setQuantities(initialQuantities);
  }, [carts]);

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

  const addToCart = (item) => {
    dispatch(ADD(item));
    setQuantities((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    console.log(item);
  };

  const remove = (item)=>{
    dispatch(REMOVE(item));
   }

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

            {quantities[item.id] > 0 ? (
              <div className="flex flex-row gap-[2rem] rounded-[2rem] text-[1.5rem] font-bold sm:px-[2rem] sm:py-[10px] px-[1rem] py-[5px] bg-gray-300">
                <button onClick={()=> remove(item)}>-</button>
                {quantities[item.id]}
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(item)} className="addToCart">
                <img src={Add_To_Cart} alt="" /> Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casual;
