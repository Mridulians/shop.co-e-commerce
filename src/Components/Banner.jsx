import Carousel from 'react-bootstrap/Carousel';
import Banner from '../assets/Banner1.jpg'
import Banner2 from '../assets/Banner2.jpg'
import Banner3 from '../assets/Banner3.jpg'
import Banner4 from '../assets/Banner4.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img src={Banner} alt=""/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner4} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselFadeExample;