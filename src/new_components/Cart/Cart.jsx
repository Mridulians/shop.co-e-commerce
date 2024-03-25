import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../Features/cartSlice";
import "./Cart.css";
import { useEffect } from "react";
import Delete from "../../ASSETS_NEW/delete.png";
import Checkout from "./Checkout";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const dispatch = useDispatch();
  const productCard = useSelector((state) => state.cart);

  console.log(productCard);

  const removeItem = (id) => {
    dispatch(remove(id));
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
              {productCard.map((item, id) => (
                <div className="new_card" key={id}>
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
                      onClick={() => removeItem(item.id)}
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
        <h1 className="cart_mridul">Your Cart is Empty</h1>
      )}
    </>
  );
};

export default Cart;
