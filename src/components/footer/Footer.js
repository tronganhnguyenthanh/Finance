import React from "react"
import {Row, Col, Container} from "react-bootstrap"
import LogoFooter from "./logoFooter/LogoFooter"
import RightFooter from "./rightFooter/rightFooter"
// import circle_footer from "../../images/circle_footer.png"
// import Facebook from "../../images/Facebook.png"
// import Twitter from "../../images/Twitter.png"
// import Linkedin from "../../images/Linkedin.png"
const Footer = () => {
  return (
   <div className="mortgage-footer">
    <Container>
      <Row>
        <LogoFooter/>
        <Col lg="8">
          <RightFooter/>
        </Col>
      </Row>
    </Container>
   </div> 
  )
}

export default Footer