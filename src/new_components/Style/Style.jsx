// import React from 'react'
import "./Style.css";
import Style1 from "../../ASSETS_NEW/Style1.png";
import Style2 from "../../ASSETS_NEW/Style2.png";
import Style3 from "../../ASSETS_NEW/Style3.png";
import Style4 from "../../ASSETS_NEW/Style4.png";

const Style = () => {
  return (
    <div className="style">
      <h2 className="styleheading">BROWSE BY DRESS STYLE</h2>

      <div className="styleTypes">
        <div className="firstImages">
          <img src={Style1} alt="" className="style1" />
          <img src={Style2} alt="" className="style2" />
        </div>
        <div className="secondImages">
          <img src={Style3} alt="" className="style3" />
          <img src={Style4} alt="" className="style4" />
        </div>
      </div>

      <div className="styleTypesMobile">
        <img src={Style1} alt="" />
        <img src={Style2} alt="" />
        <img src={Style3} alt="" />
        <img src={Style4} alt="" />
      </div>
    </div>
  );
};

export default Style;
