import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add } from "../../Features/cartSlice";
import Rating from "../../ASSETS_NEW/Rating.png";
import Arrival from "../New_Arrivals/Arrival";

const Product = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setSelectedProduct(data);
      } catch (error) {
        console.log("Error occurs", error);
      }
    };

    fetchProduct();
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
        <p className="item_details_desc">{selectedProduct.description}</p>
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

    <Arrival title="You might also like"/>

    </>
  );
};

export default Product;
