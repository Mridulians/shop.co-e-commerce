import "./Header.css";
import Name from "../../ASSETS_NEW/Name.png";
import Cart from "../../ASSETS_NEW/Cart.png";
import Account from "../../ASSETS_NEW/Account.png";
import { FaCaretDown, FaSearch, FaCross } from "react-icons/fa";
import MobileMenu from "../../ASSETS_NEW/MobileMenu.png";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="header">
        <a className="logo" href="/">
          <img src={Name} alt="" />
        </a>

        <div className="links">
          <li className="li_icon">
            <a href="/shop">Shop</a> <FaCaretDown />
            <ul className="subMenu">
              <li className="subMenuLi">
                <a href="/men">Men</a>
              </li>
              <li className="subMenuLi">
                <a href="/women">Women</a>
              </li>
              <li className="subMenuLi">
                <a href="/children">Children</a>
              </li>
            </ul>
          </li>

          <li>
            {" "}
            <a href="/sale">On Sale</a>
          </li>
          <li>
            {" "}
            <a href="/arrival">New Arrivals</a>
          </li>
          <li>
            <a href="/brands">Brands</a>
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
          <a href="/cart">
            {" "}
            <img src={Cart} alt="" />
          </a>
          <a href="/account">
            {" "}
            <img src={Account} alt="" />
          </a>
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
                      <a href="/men">Men</a>
                    </li>
                    <li className="subMenuLi">
                      <a href="/women">Women</a>
                    </li>
                    <li className="subMenuLi">
                      <a href="/children">Children</a>
                    </li>
                  </ul>
                </li>

                <li className="li_icon">
                  <a href="/sale">On Sale</a>
                </li>
                <li className="li_icon">
                  <a href="/arrival">New Arrivals</a>
                </li>
                <li className="li_icon">
                  <a href="/brands">Brands</a>
                </li>
              </ul>
            </div>
          )}

          <img src={Name} className="mobile" alt="" />
        </div>

        <div className="mobileLogo">
          <FaSearch className="mobileItems" />
          <img className="mobileItems" src={Cart} alt="" />
          <img className="mobileItems" src={Account} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
