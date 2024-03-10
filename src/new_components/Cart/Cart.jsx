// import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../Features/cartSlice";
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const productCard = useSelector((state) => state.cart);
  
  console.log(productCard)

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="allData">
      {productCard.map((item, id) => (
        <div className="new_card" key={id}>
          <img src={item.image} alt="" className="card_img" />
          <p className="item_title">{shortenTitle(item.title, 40)}</p>
          <h3 className="card_price">Rs{item.price}</h3>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
