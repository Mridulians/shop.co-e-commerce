import { Link } from "react-router-dom";
import ShopData from "../Shop/ShopData";
import { useState, useEffect } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { useDispatch, useSelector } from "react-redux";
import { ADD , REMOVE} from "../../Reduxx/actions/action";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

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
    <div className="complete_selling" style={{ paddingTop: "6rem" }}>
      <input
        className="searchInput"
        id="searchInput"
        type="text"
        placeholder="Search here for products..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="allData">
        {ShopData.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="new_card1" key={val.id}>
              <Link to={`/shop/${val.id}`} className="new_card">
                <img src={val.image} alt="" className="card_img" />

                <p className="item_title">{shortenTitle(val.title, 40)}</p>
                <h3 className="card_price">Rs{val.price}</h3>
              </Link>
              {quantities[val.id] > 0 ? (
              <div className="flex flex-row gap-[2rem] rounded-[2rem] text-[1.5rem] font-bold sm:px-[2rem] sm:py-[10px] px-[1rem] py-[5px] bg-gray-300">
                <button onClick={()=> remove(val)}>-</button>
                {quantities[val.id]}
                <button onClick={() => addToCart(val)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(val)} className="addToCart">
                <img src={Add_To_Cart} alt="" /> Add To Cart
              </button>
            )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
