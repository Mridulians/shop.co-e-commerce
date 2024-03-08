// import React from 'react'

import "./Navbar.css";
import Cart from '../assets/Cart.png'
// import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          {/* <img className="logoImg" src={Logo} alt="" /> */}
          <h2>E-commerce</h2>
        </div>

        <div className="links">
          <a className="item">Mens</a>
          <a className="item">Womens</a>
          <a className="item">Children</a>
          <a className="item">Gadgets</a>
          <a className="item">Explore</a>
        </div>

        <div className="cart">
           <img  className="cartImg" src={Cart} alt="" />
           <img  className="cartImg" src={Cart} alt="" />
        </div>

        <div className="underline"></div>
      
    </div>
  );
};

export default Navbar;
