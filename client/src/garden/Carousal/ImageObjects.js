import React from 'react';
import img1 from '../assets/garden2.jpg'
import img2 from '../assets/esquimalt.jpg'
import img3 from '../assets/108847041_144610190587017_276594154649226051_o.jpg'
import img5 from '../assets/garden4.png'
import img6 from '../assets/garden5.jpg'
import img7 from '../assets/garden.jpg'
import img8 from '../assets/grocery.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Bootstrap from 'bootstrap-4-react';

export default class ImageObjects extends React.Component{
  componentDidMount() {
    Bootstrap.carousel();
  }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleFade'), 2000);
  }
  render() {
return(
<Carousel>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}

      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img5}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img6}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img7}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={styles.img}
      className="d-block w-100"
      src={img8}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)}
}
let styles = {
  img: {
    minWidth: 200,
    minHeight: 200,
    maxWidth: 400,
    maxHeight: 400
  }
}
