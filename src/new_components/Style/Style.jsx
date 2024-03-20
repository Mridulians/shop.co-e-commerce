// import React from 'react'
import "./Style.css";
import Style1 from "../../ASSETS_NEW/Style1.png";
import Style2 from "../../ASSETS_NEW/Style2.png";
import Style3 from "../../ASSETS_NEW/Style3.png";
import Style4 from "../../ASSETS_NEW/Style4.png";
import { Link } from "react-router-dom";

const Style = () => {
  return (
    <div className="style">
      <h2 className="styleheading">BROWSE BY DRESS STYLE</h2>

      <div className="styleTypes">
        <div className="firstImages">
          <Link to="/casual" className="styleDesktop1">
            <img src={Style1} alt="" className="style1" />
          </Link>

          <Link to="/formal" className="styleDesktop2">
            <img src={Style2} alt="" className="style2" />
          </Link>
        </div>

        <div className="secondImages">
          <Link to="/party" className="styleDesktop2">
            <img src={Style3} alt="" className="style3" />
          </Link>

          <Link to="gym" className="styleDesktop1">
            <img src={Style4} alt="" className="style4" />
          </Link>
        </div>
      </div>

      <div className="styleTypesMobile">
        <Link to="/casual" className="someLink">
          <img src={Style1} alt="" />
        </Link>
        <Link to="/formal" className="someLink">
          <img src={Style2} alt="" />
        </Link>
        <Link to="/party" className="someLink">
          <img src={Style3} alt="" />
        </Link>
        <Link to="/gym" className="someLink">
          <img src={Style4} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Style;
