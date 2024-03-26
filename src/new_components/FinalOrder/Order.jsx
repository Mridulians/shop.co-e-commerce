// import React from 'react'
import { useEffect } from "react";
import OrderImg from "../../ASSETS_NEW/OrderAnimation.gif";
import "./Order.css";

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <img src={OrderImg} alt="" className="orderAni" />

      <h1 className="orderConfirm">Order confirmed and Placed</h1>
    </div>
  );
};

export default Order;
