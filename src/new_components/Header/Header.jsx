import "./Header.css";
import Name from "../../ASSETS_NEW/Name.png";
import Cart from "../../ASSETS_NEW/Cart.png";
import Account from "../../ASSETS_NEW/Account.png";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Mridul from "./Mridul";

const Header = () => {
  const products = useSelector((state) => state.cart);

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
          <img src={Name} alt="" />
        </Link>

        <div className="links">
          <li className="li_icon">
            <Link to="/shop">Shop</Link>
            {/* <FaCaretDown /> */}
            {/* <ul className="subMenu">
              <li className="subMenuLi">
                <Link to="/men">Men</Link>
              </li>
              <li className="subMenuLi">
                <Link to="/women">Women</Link>
              </li>
              <li className="subMenuLi">
                <Link to="/children">Children</Link>
              </li>
            </ul>  */}
          </li>

          <li>
            <Link to="/selling">On Sale</Link>
          </li>
          <li>
            <Link to="/arrival">New Arrival</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </div>
        <div className="searchBar">
          <Mridul />
        </div>
        <div className="cart_logo">
          <Link to="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>{products.length}</sub>
          </Link>

          <Link to="/account">
            <img src={Account} alt="" />
          </Link>
        </div>
      </div>

      <div className="mobileheader">
        <div className="logo_burger">
          {/* <img
            className="mobileItems"
            src={MobileMenu}
            alt=""
            onClick={() => setToggle(true)}
          /> */}

          {/* {toggle && (
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
                      <Link to="/men">Men</Link>
                    </li>
                    <li className="subMenuLi">
                      <Link to="/women">Women</Link>
                    </li>
                    <li className="subMenuLi">
                      <Link to="/children">Children</Link>
                    </li>
                  </ul>
                </li>

                <li className="li_icon">
                  <Link to="/selling">On Sale</Link>
                </li>
                <li className="li_icon">
                  <Link to="/arrival">New Arrivals</Link>
                </li>
                <li className="li_icon">
                  <Link to="/brands">Brands</Link>
                </li>
              </ul>
            </div>
          )} */}

          <Link to="/">
            <img src={Name} className="mobile" alt="" />
          </Link>
        </div>

        <div className="mobileLogo">
          {/* <FaSearch className="mobileItems" /> */}
          <Link to="/cart" style={{ display: "flex" }}>
            <img src={Cart} alt="" />
            <sub>{products.length}</sub>
          </Link>
          <Link to="/search">
            {/* <img src={Account} alt="" /> */}
            <FaSearch
              className="searchIcon"
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        </div>
      </div>

      <div className="lowerMobileheader">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/arrival">Arrival</Link>{" "}
          </li>
          <li>
            <Link to="/selling">Sale</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
