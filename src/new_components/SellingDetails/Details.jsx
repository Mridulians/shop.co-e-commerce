// import React from 'react'
import "./Details.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import Rating from "../../ASSETS_NEW/Rating.png";
import data from "../Complete_Selling/Seller";
import Arrival from "../New_Arrivals/Arrival";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Find the selected product based on id
  useEffect(() => {
    const product = data.find((item) => item.id === parseInt(id));
    if (product) {
      setSelectedProduct(product);
    }
  }, [id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  // Example sizes
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const CountDecrementer = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const CountIncrementor = () => {
    setCount(count + 1);
  };

  const addToCart = (item) => {
    dispatch(add(item));
    console.log(item);
  };

  return (
    <>
      <div className="complete_details">
        <div className="complete_details_img">
          <img src={selectedProduct.image} alt="product" />
        </div>

        <div className="item_details">
          <h2 className="item_details_title">{selectedProduct.title}</h2>
          <img src={Rating} alt="rating" className="rating" />
          <span className="item_details_price">Rs {selectedProduct.price}</span>
          <p className="item_details_desc">{selectedProduct.desc}</p>
          <div className="size_selector">
            <p>Choose Size:</p>
            {sizes.map((size, index) => (
              <button
                key={index}
                className={
                  selectedSize === size ? "selected_size" : "other_sizes"
                }
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="counter_addtocart">
            <div className="quantity_counter">
              <button onClick={CountDecrementer}>-</button>
              {count}
              <button onClick={CountIncrementor}>+</button>
            </div>

            <button onClick={() => addToCart(selectedProduct)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* <h1>hello</h1> */}
      <Arrival title="You might also like" />
    </>
  );
};

export default Details;
