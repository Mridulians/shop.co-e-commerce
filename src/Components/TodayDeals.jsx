// import React from 'react'
import Data from "../Dummy";
import "./Today.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TodayDeals = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <div className="sliders" style={{overflow:'hidden'}}>
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card_img">
              <img src={item.img} alt="" className="image" />
            </div>
            <div className="card_info">
              <p className="offer">{item.offer}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TodayDeals;
