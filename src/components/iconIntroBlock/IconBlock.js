import React from "react"
import {Container, Row, Col, Card} from "react-bootstrap"
import logo from "../../images/circle.png"
import checkbox from "../../images/checkbox.png"
const IconBlock = () => {
  return (
    <Container>
      <h3 className="intro-title">high quality output, <br /> awesome service</h3>
       <Row>
         <Col lg="4" className="p-2">
           <Card>
             <div className="image-card">
               <img src={logo} alt="" />
               <img src={checkbox} alt="" className="checkbox"/>
             </div>
             <marquee><span className="advisor">advisor</span></marquee>
             <p className="service-description">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor
             </p>
           </Card>
         </Col>
        <Col lg="4" className="p-2">
          <Card>
              <div className="image-card">
                <img src={logo} alt=""/>
                <img src={checkbox} alt="" className="checkbox"/>
              </div>
              <marquee><span className="advisor">agency</span></marquee>
              <p className="service-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
          </Card>
        </Col>
        <Col lg="4" className="p-2">
          <Card>
            <div className="image-card">
              <img src={logo} alt=""/>
              <img src={checkbox} alt="" className="checkbox"/>
            </div>
            <marquee><span className="advisor">management</span></marquee>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </Card>
        </Col>
       </Row>
     </Container>
    )
}

export default IconBlock