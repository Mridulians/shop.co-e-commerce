/* eslint-disable react/jsx-key */
import "./AllSelling.css";
import Data from "./Seller";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import { Link } from "react-router-dom";

const AllSelling = () => {

  console.log(Data)
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
    <div className="complete_selling">
      <h2 className="heading_text">
        Make a statement with our coveted best sellers , and sets the benchmark for contemporary fashion.
      </h2>

      <div className="allData">
        {Data.map((items) => (
          <div className="new_card1" key={items.id}>
            <Link to={`/selling/${items.id}`} className="new_card">
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

export default AllSelling;
