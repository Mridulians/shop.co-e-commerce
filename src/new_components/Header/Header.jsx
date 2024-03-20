import "./Header.css";
import Name from "../../ASSETS_NEW/Name.png";
import Cart from "../../ASSETS_NEW/Cart.png";
import Account from "../../ASSETS_NEW/Account.png";
import { FaCaretDown, FaSearch, FaCross } from "react-icons/fa";
import MobileMenu from "../../ASSETS_NEW/MobileMenu.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="header">
        {/* <a className="logo" href="/">
          <img src={Name} alt="" />
        </a> */}
        <Link className="logo" to="/">
          <img src={Name} alt="" />
        </Link>

        <div className="links">
          <li className="li_icon">
            {/* <a href="/shop">Shop</a> <FaCaretDown /> */}
            <Link to="/shop">Shop</Link> <FaCaretDown />
            <ul className="subMenu">
              <li className="subMenuLi">
                {/* <a href="/men">Men</a> */}
                <Link to="/men">Men</Link>
              </li>
              <li className="subMenuLi">
                {/* <a href="/women">Women</a> */}
                <Link to="/women">Women</Link>
              </li>
              <li className="subMenuLi">
                {/* <a href="/children">Children</a> */}
                <Link to="/children">Children</Link>
              </li>
            </ul>
          </li>

          <li>
            {/* <a href="/sale">On Sale</a> */}
            <Link to="/selling">On Sale</Link>
          </li>
          <li>
            {/* <a href="arrival">New Arrivals</a> */}
            <Link to="/arrival">New Arrival</Link>
          </li>
          <li>
            {/* <a href="/brands">Brands</a> */}
            <Link to="/brands">Brands</Link>
          </li>
        </div>

        <div className="searchBar">
          <input
            type="text"
            className="searchBar"
            placeholder="Search for products..."
          />
          <FaSearch className="magni" />
        </div>
        <div className="cart_logo">
          {/* <a href="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>{products.length}</sub>
          </a> */}

          <Link to="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>{products.length}</sub>
          </Link>

          {/* <a href="/account">
            <img src={Account} alt="" />
          </a> */}

          <Link to="/account">
            <img src={Account} alt="" />
          </Link>
        </div>
      </div>

      <div className="mobileheader">
        <div className="logo_burger">
          <img
            className="mobileItems"
            src={MobileMenu}
            alt=""
            onClick={() => setToggle(true)}
          />

          {toggle && (
            <div className="app__navbar-smallscreen_overlay">
              <FaCross
                onClick={() => setToggle(false)}
                className="overlay__close"
              />
              <ul>
                <li className="li_icon">
                  <a>Shop</a> <FaCaretDown />
                  <ul className="subMenu">
                    <li className="subMenuLi">
                      {/* <a href="/men">Men</a> */}
                      <Link to="/men">Men</Link>
                    </li>
                    <li className="subMenuLi">
                      {/* <a href="/women">Women</a> */}
                      <Link to="/women">Women</Link>
                    </li>
                    <li className="subMenuLi">
                      {/* <a href="/children">Children</a> */}
                      <Link to="/children">Children</Link>
                    </li>
                  </ul>
                </li>

                <li className="li_icon">
                  {/* <a href="/sale">On Sale</a> */}
                  <Link to="/sale">On Sale</Link>
                </li>
                <li className="li_icon">
                  {/* <a href="/arrival">New Arrivals</a> */}
                  <Link to="/arrival">New Arrivals</Link>
                </li>
                <li className="li_icon">
                  {/* <a href="/brands">Brands</a> */}
                  <Link to="/brands">Brands</Link>
                </li>
              </ul>
            </div>
          )}

          <Link to="/">
            <img src={Name} className="mobile" alt="" />
          </Link>
        </div>

        <div className="mobileLogo">
          <FaSearch className="mobileItems" />
          {/* <a href="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>1</sub>
          </a> */}
          <Link to="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>{products.length}</sub>
          </Link>
          {/* <a href="/account">
            <img src={Account} alt="" />
          </a> */}
          <Link to="/account">
            <img src={Account} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
