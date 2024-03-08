import Versace from "../../ASSETS_NEW/versace.png";
import Zara from "../../ASSETS_NEW/zara.png";
import Gucci from "../../ASSETS_NEW/gucci.png";
import Prada from "../../ASSETS_NEW/prada.png";
import Calvin from "../../ASSETS_NEW/calvin.png";
import "./BrandSlider.css";

const BrandSlider = () => {

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={Versace} alt="" />
        <img src={Zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={Calvin} alt="" />
        <img src={Versace} alt="" />
        <img src={Zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={Calvin} alt="" />
      </div>
    </div>
  );
};

export default BrandSlider;
