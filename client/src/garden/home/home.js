import React from 'react'
import NavBar from '../navbar';
import About from '../about/about'
import colors from '../styles/colors'
import Carousal from '../Carousal/Carousel'
import '../Carousal/ImageObjects'
import ImageObjects from '../Carousal/ImageObjects';

export default function home() {
  return (
    <div style={styles.home}>
 <div><NavBar/></div>
<div style={styles.aboutDiv}><About/></div>
    </div>
  )
}

const styles = {
  home: {
    height: '100%',
    backgroundColor: '#9ABB43',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutDiv:{
    width: '100%'
  }
}