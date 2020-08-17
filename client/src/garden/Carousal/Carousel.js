import React, { Component } from 'react';
import Bootstrap,{Carousel, BImg } from 'bootstrap-4-react';
import gardenPic from '../assets/garden4.png'
import img1 from '../assets/garden2.jpg'
import img2 from '../assets/esquimalt.jpg'
import img3 from '../assets/108847041_144610190587017_276594154649226051_o.jpg'
import img5 from '../assets/garden4.png'
import img6 from '../assets/garden5.jpg'
import img7 from '../assets/garden.jpg'
import img8 from '../assets/grocery.jpg'
import './Carousal.scss'

const first_src = 'data:{img1}' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = second_src.replace('Second', 'Third');
const fourth_src = third_src.replace('Third', 'Fourth');
const fifth_src = fourth_src.replace('Fifth', 'Sixth');
const sixth_src = fifth_src.replace('Seventh', 'Eigth');
const seventh_src = sixth_src.replace('Eight', 'Ninth')
const label = "Image 7"

export default class Carousal extends Component {
  componentDidMount() {
    Bootstrap.carousel();
  }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleFade'), 1000);
  }

  render() {
    return (
      <div className="carousal carousaldiv" style={styles.carousal}>
      <Carousel w="100" h="600" id="carouselExampleFade" fade>
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" h="600" src={first_src} /><img src={gardenPic} style={styles.image} alt=""/></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" h="600"src={second_src} /><img src={img1} style={styles.image} alt=""/></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" h="600" src={third_src} /><img src={img2} style={styles.image} alt=""/></Carousel.Item>
               <Carousel.Item><BImg display="block" w="100" h="600" src={fourth_src} /><img src={img8} style={styles.image} alt=""/></Carousel.Item>
                    <Carousel.Item><BImg display="block" w="100" h="600" src={fifth_src} /><img src={img5} style={styles.image} alt=""/></Carousel.Item>
                         <Carousel.Item><BImg display="block" w="100" h="600" src={sixth_src} /><img src={img6} style={styles.image} alt=""/></Carousel.Item>
                         <Carousel.Item><BImg display="block" w="100" h="600" src={seventh_src} /><img src={img7} style={styles.image} alt=""/><p>{label}</p></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleFade">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleFade">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
      </div>
    )
  }
}

const styles = {
  carousal: {
    minHeight: 200,
    minWidth: 200,
    maxHeight: 600,
    maxWidth: 600,
    alignSelf: 'center'
  },
  image: {
        minHeight: 200,
    minWidth: 200,
    maxHeight: 600,
    maxWidth: 600,
  }
}