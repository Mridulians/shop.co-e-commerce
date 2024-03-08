import "./Footer.css";
import Logo from "../../ASSETS_NEW/Name.png";
import Fb from "../../ASSETS_NEW/fb.png";
import Insta from "../../ASSETS_NEW/insta.png";
import Twitter from "../../ASSETS_NEW/github.png";
import Github from "../../ASSETS_NEW/github.png";
import GPay from "../../ASSETS_NEW/GPay.png";
import APay from "../../ASSETS_NEW/APay.png";
import Master from "../../ASSETS_NEW/Mastercard.png";
import Paypal from "../../ASSETS_NEW/Paypal.png";
import Visa from "../../ASSETS_NEW/Visa.png";
import News from "../NewsLetter/News";

const Footer = () => {
  return (
    <div className="newsletter_footer">
      <News />
      <div className="complete_footer">
        <div className="footer">
          <div className="footer1">
            <img src={Logo} alt="" />
            <p className="footer1_text">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="social_icons">
              <img src={Twitter} alt="" />
              <img src={Fb} alt="" className="fb_icon" />
              <img src={Insta} alt="" />
              <img src={Github} alt="" />
            </div>
          </div>
          <div className="footer2">
            <h2 className="footersHeading">COMPANY</h2>
            <ul className="footersList">
              <li className="footerListItems">About</li>
              <li className="footerListItems">Features</li>
              <li className="footerListItems">Work</li>
              <li className="footerListItems">Career</li>
            </ul>
          </div>
          <div className="footer2">
            <h2 className="footersHeading">HELP</h2>
            <ul className="footersList">
              <li className="footerListItems">Customer Support</li>
              <li className="footerListItems">Delivery Details</li>
              <li className="footerListItems">Terms And Conditions</li>
              <li className="footerListItems">Privacy Policy</li>
            </ul>
          </div>
          <div className="footer2">
            <h2 className="footersHeading">FAQ</h2>
            <ul className="footersList">
              <li className="footerListItems">Account</li>
              <li className="footerListItems">Manage Deliveries</li>
              <li className="footerListItems">Orders</li>
              <li className="footerListItems">Payments</li>
            </ul>
          </div>
          <div className="footer2">
            <h2 className="footersHeading">RESOURCES</h2>
            <ul className="footersList">
              <li className="footerListItems">Free eBook</li>
              <li className="footerListItems">Development Tutorial</li>
              <li className="footerListItems">How to-blog</li>
              <li className="footerListItems">Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="after_footer">
          <hr className="line" />
          <div className="payments">
            <p className="copyright">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="payment_methods">
              <img src={Visa} alt="" className="upi" />
              <img src={Master} alt="" className="upi" />
              <img src={Paypal} alt="" className="upi" />
              <img src={APay} alt="" className="upi" />
              <img src={GPay} alt="" className="upi" />
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Footer;
