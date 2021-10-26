import React from 'react'
import {Carousel} from 'react-bootstrap'
import billingimg1 from './billingimg1.jpg'
import billingimg2 from './billingimg2.jpg'
import billingimg3 from './billingimg3.jpg'

import './NavBar.css'

const Home = (props) => {

    return (
        <div style={{margin:"30px 30px"}}>  
        <Carousel controls={false} fade={true} pause={true}>
  <Carousel.Item interval={2000}>
    <img 
      className="d-flex w-100"
      height="600px"
      src={billingimg1}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <h3 style={{color:"grey"}}>Is a simple and easy-to-use application.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
    className="d-flex w-100"
       height="600px" 
      src={billingimg2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"grey"}}>Used for calculating all the details given by the customer.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
       className="d-flex w-100 "
       height="600px"
      src={billingimg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"green"}}>Register Now!!!</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
    )
}
export default Home