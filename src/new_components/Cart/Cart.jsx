import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../Features/cartSlice";
import "./Cart.css";
import { useEffect } from "react";
import Delete from "../../ASSETS_NEW/delete.png";
import EmptyCart from "../../ASSETS_NEW/empty_cart.png";
import Checkout from "./Checkout";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const dispatch = useDispatch();
  const productCard = useSelector((state) => state.cart);

  console.log(productCard);

  const removeItem = (uniqueId) => {
    dispatch(remove(uniqueId));
  };

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

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

  return (
    <>
      {productCard.length > 0 ? (
        <div>
          <h1 className="cartHeading">Your Shopping Bag</h1>
          <div className="completeCart">
            <div className="cartAllData">
              {productCard.map((item) => (
                <div className="new_card" key={item.uniqueId}>
                  <img src={item.image} alt="" className="card_img" />
                  <div className="card_content">
                    <div className="price_title">
                      <p className="item_title">
                        {shortenTitle(item.title, 40)}
                      </p>
                      <h3 className="card_price">Rs{item.price}</h3>
                    </div>

                    <img
                      className="deleteBtn"
                      src={Delete}
                      alt="delete"
                      onClick={() => removeItem(item.uniqueId)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Checkout
              totalPrice={totalPrice}
              discount={discount}
              delivery={delivery}
              finalPrice={finalPrice}
              presence={true}
            />
          </div>
        </div>
      ) : (
        <div className="pt-[5rem] flex flex-col justify-center items-center">
          <img src={EmptyCart} alt="" />
          <h2 className="text-[1.5rem] px-[1rem] sm:px-[0rem] font-bold sm:text-[2rem] font-sans text-center">Your Cart is Missing You 😔😔</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
