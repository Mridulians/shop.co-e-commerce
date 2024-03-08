import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const data = [
    {
      name: "Sarah M. ✅",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: "⭐⭐⭐⭐⭐",
      id: 1,
    },
    {
      name: "Alex K. ✅",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: "⭐⭐⭐⭐⭐",
      id: 2,
    },
    {
      name: "Sarah M. ✅",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: "⭐⭐⭐⭐⭐",
      id: 3,
    },
    {
      name: "Alex K. ✅",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: "⭐⭐⭐⭐⭐",
      id: 4,
    },
    {
      name: "Sarah M. ✅",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: "⭐⭐⭐⭐⭐",
      id: 5,
    },
    {
      name: "Alex K. ✅",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: "⭐⭐⭐⭐⭐",
      id: 6,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    // slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial_section">
      <div className="section-title">
        <h2>OUR HAPPY CUSTOMERS</h2>
      </div>

      <div className="testimonial_slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-main" key={index}>
              <div className="content-slider" key={index}>
                <p>{item.stars}</p>
                <p className="customer_name">{item.name}</p>
                <p className="customer_review">{item.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
