import React from "react"
import {Row} from "react-bootstrap"
import Legal from "../../legals/Legal"
import Contact from "../contact/Contact"
import FooterLocation from "../locationFooter/FooterLocation"
const RightFooter = () => {
   return (
    <Row>
      <FooterLocation/>
      <Contact/>
      <Legal/>
    </Row>
   )
}

export default RightFooter