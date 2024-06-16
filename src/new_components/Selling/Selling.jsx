import "./Selling.css";
import Dress5 from "../../ASSETS_NEW/dress5.png";
import Dress6 from "../../ASSETS_NEW/dress6.png";
import Dress7 from "../../ASSETS_NEW/dress7.png";
import Dress8 from "../../ASSETS_NEW/dress8.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Selling = () => {
  const data = [
    {
      img: Dress5,
      name: "SHIRT WITH TAPE DETAILS",
      price: "120$",
      previousPrice: "",
      discount: "",
      id: 1,
    },
    {
      img: Dress6,
      name: "SKINNY FIT T-SHIRT",
      price: "240$",
      previousPrice: "260$",
      discount: "-20%",
      id: 2,
    },
    {
      img: Dress7,
      name: "CHECKERED SHORTS",
      price: "180$",
      previousPrice: "",
      discount: "",
      id: 3,
    },
    {
      img: Dress8,
      name: "SLEEVE STRIPED JEANS",
      price: "130$",
      previousPrice: "160$",
      discount: "-30%",
      id: 4,
    },
  ];

  const navigate = useNavigate();

  const productClicked = () => {
    navigate("/selling");
  };

  return (
    <div className="selling">
      <h2 className="sellingheading">TOP SELLING</h2>

      <div className="heading_viewMore">
        <h2 className="heading_viewMore_heading">TOP SELLING</h2>
        <a href="/selling">
          <FaArrowRight className="arrowForViewMore" />
        </a>
      </div>

      <div className="clothCards">
        {data.map((item) => (
          <div className="singleCard" key={item.id} onClick={productClicked}>
            <img src={item.img} alt="" />
            <p className="clothName">{item.name}</p>
            <div className="cardInfo">
              <p className="price">{item.price}</p>
              <p className="previous">{item.previousPrice}</p>
              <p className="discount">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
      <h6>
        {/* <a href="/selling">View All</a> */}
        <Link to="/selling">View All</Link>
      </h6>
    </div>
  );
};

export default Selling;
