/* eslint-disable react/jsx-key */
import "./AllSelling.css";
import Data from "./Seller";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ADD , REMOVE} from "../../Reduxx/actions/action";


const AllSelling = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  // console.log(Data);
  const dispatch = useDispatch();
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

  const remove = (item) =>{
    dispatch(REMOVE(item));
  }


  return (
    <div className="complete_selling">
      <h2 className="heading_text">
        Make a statement with our coveted best sellers , and sets the benchmark
        for contemporary fashion.
      </h2>

      <div className="allData">
        {Data.map((items) => (
          <div className="new_card1" key={items.id}>
            <Link to={`/selling/${items.id}`} className="new_card">
              <img src={items.image} alt="" className="card_img" />

              <p className="item_title">{shortenTitle(items.title, 40)}</p>
              <h3 className="card_price">Rs{items.price}</h3>
            </Link>

            {quantities[items.id] > 0 ? (
              <div className="flex flex-row gap-[2rem] rounded-[2rem] text-[1.5rem] font-bold sm:px-[2rem] sm:py-[10px] px-[1rem] py-[5px] bg-gray-300">
                <button onClick={()=> remove(items)}>-</button>
                {quantities[items.id]}
                <button onClick={() => addToCart(items)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(items)} className="addToCart">
                <img src={Add_To_Cart} alt="" /> Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSelling;
