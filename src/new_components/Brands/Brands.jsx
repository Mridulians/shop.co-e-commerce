import { useState } from "react";
import Versace from "../../ASSETS_NEW/versace.png";
import Calvin from "../../ASSETS_NEW/calvin.png";
import Prada from "../../ASSETS_NEW/prada.png";
import Zara from "../../ASSETS_NEW/zara.png";
import Gucci from "../../ASSETS_NEW/gucci.png";
import "./Brand.css";
import CalvinData from "./Calvin";
import ZaraData from "./Zara";
import FormalDataPrada from "../Casual/FormalData";
import PartyDataVersace from "../Casual/PartyData";
import GucciSelling from "../Complete_Selling/Seller";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Add_To_Cart from "../../ASSETS_NEW/Cart.png";
import { add } from "../../Features/cartSlice";

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState("versace");

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const dispatch = useDispatch();

  const shortenTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substr(0, maxLength) + "..."
      : title;
  };

  const addToCart = (item) => {
    dispatch(add(item));
    console.log(item);
  };

  // Define data for each brand
  const brandData = {
    versace: PartyDataVersace,
    calvin: CalvinData,
    prada: FormalDataPrada,
    zara: ZaraData,
    gucci: GucciSelling,
  };

  return (
    <div className="brands">
      <h1>Brands that you love and adore</h1>

      <div className="brands_input">
        <img
          src={Versace}
          alt="Versace"
          onClick={() => handleBrandClick("versace")}
          className={selectedBrand === "versace" ? "selected" : ""}
        />
        <img
          src={Calvin}
          alt="Calvin"
          onClick={() => handleBrandClick("calvin")}
          className={selectedBrand === "calvin" ? "selected" : ""}
        />
        <img
          src={Prada}
          alt="Prada"
          onClick={() => handleBrandClick("prada")}
          className={selectedBrand === "prada" ? "selected" : ""}
        />
        <img
          src={Zara}
          alt="Zara"
          onClick={() => handleBrandClick("zara")}
          className={selectedBrand === "zara" ? "selected" : ""}
        />
        <img
          src={Gucci}
          alt="Gucci"
          onClick={() => handleBrandClick("gucci")}
          className={selectedBrand === "gucci" ? "selected" : ""}
        />
      </div>

      <div className="datas">
        {selectedBrand && (
          <div className="allData">
            {brandData[selectedBrand].map((items) => (
              <div className="new_card1" key={items.id}>
                <Link to={`/brands/${items.id}`} className="new_card">
                  <img src={items.image} alt="" className="card_img" />

                  <p className="item_title">{shortenTitle(items.title, 40)}</p>
                  <h3 className="card_price">Rs{items.price}</h3>
                </Link>

                <button onClick={() => addToCart(items)} className="addToCart">
                  <img src={Add_To_Cart} alt="" /> Add To Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
