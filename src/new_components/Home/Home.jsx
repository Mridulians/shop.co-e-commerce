import Banner from "../Banner/Banner";
import Arrival from "../New_Arrivals/Arrival";
import Selling from "../Selling/Selling";
import Style from "../Style/Style";
import Testimonial from "../Testimonials/Testimonial";
import BrandSlider from "../BrandSlider/BrandSlider";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandSlider />
      <Arrival title="NEW ARRIVALS" />
      <Selling />
      <Style />
      <Testimonial />
    </div>
  );
};

export default Home;
