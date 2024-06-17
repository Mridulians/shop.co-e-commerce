// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams , useNavigate } from "react-router-dom";
import Rating from "../../ASSETS_NEW/Rating.png";
import { ADD  , REMOVE} from "../../Reduxx/actions/action";


const CartView = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); 
    const initialQuantities = {};
    carts.forEach((item) => {
      initialQuantities[item.id] = item.qnty;
    });
    setQuantities(initialQuantities);
  }, [carts]);

    const { id } = useParams(); // Get the product ID from the URL
  const productCard = useSelector((state) => state.cartreducer.carts);

  // Find the product with the matching ID
  const selectedProduct = productCard.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  

  console.log(selectedProduct);

 // Example sizes
 const sizes = ["Small", "Medium", "Large", "X-Large"];

 const handleSizeSelect = (size) => {
   setSelectedSize(size);
 };

 const addToCart = (item) => {
  dispatch(ADD(item));
  setQuantities((prev) => ({
    ...prev,
    [item.id]: (prev[item.id] || 0) + 1,
  }));
  console.log(item);
};

const remove = (item) => {
  dispatch(REMOVE(item));
  setQuantities((prev) => {
    const newQuantities = {
      ...prev,
      [item.id]: (prev[item.id] || 0) - 1,
    };
    if (newQuantities[item.id] < 1) {
      navigate("/cart");
    }
    return newQuantities;
  });
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
             {quantities[selectedProduct.id] > 0 ? (
              <div className="flex flex-row gap-[2rem] rounded-[2rem] text-[1.5rem] font-bold sm:px-[2rem] sm:py-[10px] px-[1rem] py-[5px] bg-gray-300">
                <button onClick={()=> remove(selectedProduct)}>-</button>
                {quantities[selectedProduct.id]}
                <button onClick={() => addToCart(selectedProduct)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(selectedProduct)} className="addToCart">
               Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
