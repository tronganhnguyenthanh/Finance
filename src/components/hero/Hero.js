import React from "react"
import {Container, Row, Col, Button} from "react-bootstrap"
import vector4 from "../../images/Vector_4.png"
import vector5 from "../../images/Vector_5.png"
const Hero = () => {
  return (
   <div className="hero">
     <Container>
       <Row>
         <Col lg="6">
           <h2 className="financial-title">financial advisor for next level happy life!</h2>
           <p className="financial-description">
             Are you looking for amazing financial advisor services? 
             Don't worry! We got it for you!
           </p>
           <Button type="button" className="btn-learn-more">
              Learn More
           </Button>
         </Col>
         <Col lg="6">
           <img 
             src={vector4} 
             alt="" 
             className="vector4"
           />
           <img 
             src={vector5} 
             alt="" 
             className="vector5"
           />
         </Col>
       </Row>
     </Container>
   </div>
  )
}

export default Hero