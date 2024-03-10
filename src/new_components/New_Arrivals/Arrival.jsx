import "./Arrival.css";
import Dress1 from "../../ASSETS_NEW/dress1.png";
import Dress2 from "../../ASSETS_NEW/dress2.png";
import Dress3 from "../../ASSETS_NEW/dress3.png";
import Dress4 from "../../ASSETS_NEW/dress4.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Arrival = () => {
  const data = [
    {
      img: Dress1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: "120$",
      previousPrice: "",
      discount: "",
      id: 1,
    },
    {
      img: Dress2,
      name: "SKINNY FIT JEANS",
      price: "240$",
      previousPrice: "260$",
      discount: "-20%",
      id: 2,
    },
    {
      img: Dress3,
      name: "CHECKERED SHIRT",
      price: "180$",
      previousPrice: "",
      discount: "",
      id: 3,
    },
    {
      img: Dress4,
      name: "SLEEVE STRIPED T-SHIRT",
      price: "130$",
      previousPrice: "160$",
      discount: "-30%",
      id: 4,
    },
    // {
    //   img: Dress1,
    //   name: "T-SHIRT WITH TAPE DETAILS",
    //   price: "120$",
    //   previousPrice: "",
    //   discount: "",
    //   id: 5,
    // },
    // {
    //   img: Dress2,
    //   name: "SKINNY FIT JEANS",
    //   price: "240$",
    //   previousPrice: "260$",
    //   discount: "-20%",
    //   id: 6,
    // },
    // {
    //   img: Dress3,
    //   name: "CHECKERED SHIRT",
    //   price: "180$",
    //   previousPrice: "",
    //   discount: "",
    //   id: 7,
    // },
    // {
    //   img: Dress4,
    //   name: "SLEEVE STRIPED T-SHIRT",
    //   price: "130$",
    //   previousPrice: "160$",
    //   discount: "-30%",
    //   id: 8,
    // },
  ];
  return (
    <div className="arrival">
      <h2 className="arrivalsheading">NEW ARRIVALS</h2>

      <div className="heading_viewMore">
        <h2 className="heading_viewMore_heading">NEW ARRIVALS</h2>
        {/* <a href="/arrival">
          <FaArrowRight className="arrowForViewMore"/>
        </a> */}
        <Link to="/arrival">
          <FaArrowRight className="arrowForViewMore" />
        </Link>
      </div>

      <div className="clothCards">
        {data.map((item) => (
          <div className="singleCard" key={item.id}>
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
        {/* <a href="arrival">View All</a> */}
        <Link to="/arrival">View All</Link>
      </h6>
    </div>
  );
};

export default Arrival;
