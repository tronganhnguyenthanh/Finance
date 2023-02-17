import React from "react"
import {Col} from "react-bootstrap"
import circle_footer from "../../../images/circle_footer.png"
import Facebook from "../../../images/Facebook.png"
import Twitter from "../../../images/Twitter.png"
import Linkedin from "../../../images/Linkedin.png"
const LogoFooter = () => {
  return(
   <Col lg="4">
      <div className="image-footer">
         <img src={circle_footer} alt="" />
         <h3>k</h3>
       </div>
       <div className="footer-name">
          <h4>kindka finance</h4>
       </div>
        <p className="footer-winning">
         2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
        </p>
        <div className="image-social">
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt=""/>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <img src={Twitter} alt=""/>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <img src={Linkedin} alt=""/>
          </a>
        </div>
   </Col>
  )
}
export default LogoFooter