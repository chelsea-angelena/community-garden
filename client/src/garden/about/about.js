import React from 'react'
import Carousal from '../Carousal/Carousel'
import './about.scss'

export default function About() {
  return (
<div className="about" style={styles.about}>
<div className="carousal">
  <Carousal />
</div>
<div style={styles.firstDuv}><img style={styles.image} src={{uri:"https://picsum.photos"}} alt=""/></div>
<div>BUSINESS INFO
Opened in 2012</div>
<div>
Mission
</div>
<div>To help create a healthy and sustainable community in which all people have access to food education and the means to produce and enjoy nutritious local food.
</div>
<div>
ADDITIONAL CONTACT INFO
</div>
<div>
esquimaltcommunitygardens@gmail.com
https://www.esquimalt.ca/municipal-services/sustainability-environment/community-gardens
</div>
<div>
MORE INFO
</div>
<div>
About
</div>
<div>
Esquimalt Community Garden is a small group of gardeners dedicated to sustainability practices, organic gardening, and community participation.

Members hold individual plots to plant and grow their desires, all while working together on community plots.
The Esquimalt Community Garden Society is a non-profit community organization that seeks to promote growing local food, food education and food equity for the p... See More
</div>
<div>
Founding Date
2009
</div>
<div>
Products
</div>
<div>
As we start to produce, our extra harvest (Vegetables and Herbs) is available to the community via our stand beside the garden entrance.
</div>
<div>
Public Transit
bus route #6, #14, #26
</div>
<div>
categories
Community Organization · Nonprofit Organization · Community Garden
</div>
</div>
  )
}

const styles={
    image: {
    height: 400,
    width: 400
  },
  about: {
    width: '60%',
    marginLeft: 200,
    marginTop: 100,
    padding: 42,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'hsl(0, 0%, 99%)'
  },
  firstDuv: {
    width: 500,
    height: 500
  }
}