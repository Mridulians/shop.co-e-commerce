import "./News.css";
import Mail from "../../ASSETS_NEW/Mail.png";

const News = () => {
  return (
    <div className="newsLetter">
      <div className="newletter_text">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>

      <div className="newletter_email">
        <div className="email">
          <input type="text" placeholder="Enter Your Email Address" />
          <img src={Mail} alt="" />
        </div>
        <button className="submit">Subscribe to Newsletter.</button>
      </div>
    </div>
  );
};

export default News;
