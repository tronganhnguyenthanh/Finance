import React from "react"
import {Row, Col, Container} from "react-bootstrap"
import circle_footer from "../../images/circle_footer.png"
import Facebook from "../../images/Facebook.png"
import Twitter from "../../images/Twitter.png"
import Linkedin from "../../images/Linkedin.png"
const Footer = () => {
  return (
   <div className="mortgage-footer">
    <Container>
      <Row>
        <Col lg="4">
           <div className="image-footer">
             <img src={circle_footer} alt=""/>
             <h3>k</h3>
           </div>
           <div className="footer-name">
             <h4>kindka finance</h4>
           </div>
           <p className="footer-winning">
             2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
           </p>
           <div className="image-social">
              <a href="https://www.facebook.com/"><img src={Facebook} alt=""/></a>
              <a href="https://twitter.com/i/flow/login"><img src={Twitter} alt=""/></a> 
              <a href="https://www.linkedin.com/feed/"><img src={Linkedin} alt=""/></a>
           </div>
        </Col>
        <Col lg="8">
          <Row>
            <Col lg="4">
              <div className="footer-name mt-5">
                <h4 className="footer-text">Location</h4>
                <p>America</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Africa</p>
              </div>
            </Col>
            <Col lg="4">
              <div className="footer-name mt-5">
                <h4 className="footer-text">Contact</h4>
                <p>About Me</p>
                <p>Teams</p>
                <p>Profile</p>
                <p>FAQ</p>
              </div>
            </Col>
            <Col lg="4">
              <div className="footer-name mt-5">
                <h4 className="footer-text">Legals</h4>
                <p>Privacy</p>
                <p>Disclaimer</p>
                <p>Terms</p>
                <p>Company</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
   </div> 
  )
}

export default Footer