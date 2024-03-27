import "./Shop.css";
import ShopData from "./ShopData";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  console.log(ShopData);
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
    <div className="shopping_page">
      <h1 className="shop_heading">
        Welcome to our shop , here you get what you truly deserve!
      </h1>

      <div className="allData">
        {ShopData.map((items) => (
          <div className="new_card1" key={items.id}>
            <Link to={`/shop/${items.id}`} className="new_card">
              <img src={items.image} alt="" className="card_img" />

              <p className="item_title">{shortenTitle(items.title, 40)}</p>
              <h3 className="card_price">Rs{items.price}</h3>
            </Link>

            <button onClick={() => addToCart(items)} className="addToCart">
              <img src={Add_To_Cart} alt="" /> Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
