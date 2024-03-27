import "./Banner.css";
import BannerImg from "../../ASSETS_NEW/DesktopImage.png";
import Mobile from "../../ASSETS_NEW/MobileImage.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const shopNow = () => {
    navigate("/shop");
  };
  return (
    <div className="banner">
      <div className="content">
        <h2 className="title">
          FIND CLOTHES THAT MATCHES YOUR STYLE AND ELEGANCE
        </h2>
        <p className="banner_info">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button onClick={shopNow} className="shop_now">
          Shop now
        </button>

        <div className="numbers">
          <div className="number1">
            <span>200+</span>
            <p>International Brands</p>
          </div>
          <div className="number1">
            <span>2,000+</span>
            <p>High Quality Products</p>
          </div>
          <div className="number1">
            <span>30,000+</span>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="banner_img">
        <img src={BannerImg} alt="" />

        <img src={Mobile} className="mobile" alt="" />
      </div>
    </div>
  );
};

export default Banner;
