/* eslint-disable react/prop-types */
import "./Cart.css";
import checkout from "../../ASSETS_NEW/checkout.png";
import { useNavigate } from "react-router-dom";

const Checkout = ({ totalPrice, discount, delivery, finalPrice, presence }) => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="cartTotalPrice">
      <h2>Order Summary</h2>

      <div className="prices">
        <div className="priceSeparation">
          <h3>SubTotal</h3>
          <span>Rs {totalPrice}</span>
        </div>
        <div className="priceSeparation">
          <h3>Discount(10%)</h3>
          <span>Rs {discount}</span>
        </div>
        <div className="priceSeparation">
          <h3>Delivery</h3>
          <span>Rs {delivery}</span>
        </div>
        <div className="priceSeparation">
          <h3>Total</h3>
          <span>Rs {finalPrice}</span>
        </div>
      </div>

      {presence && (
        <button className="checkout" onClick={handleCheckOut}>
          Go To Checkout <img src={checkout} alt="" />
        </button>
      )}
    </div>
  );
};

export default Checkout;
