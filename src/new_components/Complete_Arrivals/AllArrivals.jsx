import "./AllArrivals.css";
import { useEffect, useState } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";

const AllArrivals = () => {
  const [products, getProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      getProducts(data);
      console.log(data);
    } catch (error) {
      console.log("Error occurs", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="complete_arrivals">
      <h2 className="heading_text">
        Elevate your style game with the trendiest threads straight from our
        newest collection.
      </h2>

      <div className="allData">
        {products.map((item, id) => (
          <div className="new_card" key={id}>
            <img src={item.image} alt="" className="card_img" />
            <p className="item_title">{shortenTitle(item.title, 40)}</p>
            <h3 className="card_price">{item.price}$</h3>
            <button>
              <img src={Add_To_Cart} alt="" /> Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArrivals;
