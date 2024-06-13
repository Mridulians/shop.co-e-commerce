/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import Visa from "../../ASSETS_NEW/Visa.png";
import Gpay from "../../ASSETS_NEW/GPay.png";
import Master from "../../ASSETS_NEW/Mastercard.png";
import Paypal from "../../ASSETS_NEW/Paypal.png";
import { useEffect } from "react";
import "./CheckoutPage.css";
import Checkout from "../Cart/Checkout";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const [selectedPayment, setSelectedPayment] = useState(""); // State to track selected payment method

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  // Function to handle payment method selection
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const productCard = useSelector((state) => state.cart);

  console.log(productCard);

  // Function to get the total price
  const getTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += parseFloat(item.price); // Convert price to a number before adding
    });
    return totalPrice;
  };

  const totalPrice = getTotalPrice(productCard).toFixed(2);
  console.log(totalPrice); // Output the total price

  const discount = (totalPrice * 0.1).toFixed(2);
  const delivery = 50;

  let finalPrice = (
    parseFloat(totalPrice) +
    delivery -
    parseFloat(discount)
  ).toFixed(2);

  console.log(finalPrice);

  const handleAddress = () => {
    navigate("/address");
  };

  // Function to check if a payment method is selected
  const isPaymentSelected = selectedPayment !== "";

  return (
    <>
      <div className="checkoutPage">
        <div className="checkoutContent">
          <h1>Select the Payment Method</h1>
          <div className="options">
            <div className="optionChoices">
              <h2>Cash on Delivery</h2>
              <input
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                checked={selectedPayment === "cashOnDelivery"}
                onChange={() => handlePaymentSelection("cashOnDelivery")}
              />
            </div>
            <div className="optionChoices">
              <img src={Visa} alt="visa" />
              <img src={Master} alt="master" />
              <input
                type="radio"
                name="paymentMethod"
                id="visaMaster"
                checked={selectedPayment === "visaMaster"}
                onChange={() => handlePaymentSelection("visaMaster")}
              />
            </div>
            <div className="optionChoices">
              <img src={Paypal} alt="paypal" />
              <img src={Gpay} alt="Gpay" />
              <input
                type="radio"
                name="paymentMethod"
                id="paypalGpay"
                checked={selectedPayment === "paypalGpay"}
                onChange={() => handlePaymentSelection("paypalGpay")}
              />
            </div>
            <div className="optionChoices">
              <h2>Emi or other options</h2>
              <input
                type="radio"
                name="paymentMethod"
                id="emiOptions"
                checked={selectedPayment === "emiOptions"}
                onChange={() => handlePaymentSelection("emiOptions")}
              />
            </div>
          </div>
        </div>

        <Checkout
          totalPrice={totalPrice}
          discount={discount}
          delivery={delivery}
          finalPrice={finalPrice}
          presence={false}
        />
      </div>
      <div className="orderNow">
        <button onClick={handleAddress} disabled={!isPaymentSelected}>
          Add Address
        </button>
      </div>
    </>
  );
};

export default CheckoutPage;
