/* eslint-disable react/prop-types */
import "./Details.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../ASSETS_NEW/Rating.png";
import Arrival from "../New_Arrivals/Arrival";
import { ADD  , REMOVE} from "../../Reduxx/actions/action";

const Details = ({ data }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  const [quantities, setQuantities] = useState({});
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Find the selected product based on id
  useEffect(() => {
    const product = data.find((item) => item.id === parseInt(id));
    console.log(product);
    if (product) {
      setSelectedProduct(product);
    }

    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [id]);

  useEffect(() => {
    const initialQuantities = {};
    carts.forEach((item) => {
      initialQuantities[item.id] = item.qnty;
    });
    setQuantities(initialQuantities);
  }, [carts]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

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

  const remove = (item)=>{
    dispatch(REMOVE(item));
   }

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

      {/* <h1>hello</h1> */}
      <Arrival title="You might also like" />
    </>
  );
};

export default Details;
