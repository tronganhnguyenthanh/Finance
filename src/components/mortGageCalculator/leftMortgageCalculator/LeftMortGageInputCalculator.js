import React from "react"
import {Row, Col, Form, InputGroup} from "react-bootstrap"
const LeftMortGageInputCalculator = (props) => {
  return (
   <Row>
     <Col lg="6" className="responsive-purchase-price">
       <Form.Label className="mortgage-label">Purchase Price: ${(props.purchasePrice)} </Form.Label>
       <InputGroup className="mb-3">
         <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
         <Form.Control 
           className="mortgage-input-purchase"
           onChange={props.handleOnChangePurChasePrice}
         />
       </InputGroup>
     </Col>
     <Col lg="6" className="right-down-payment">
       <Form.Label className="mortgage-label">Down Payment: ${props.downPayment}</Form.Label>
       <InputGroup className="mb-3">
         <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
         <Form.Control 
           className="mortgage-input-purchase"
           onChange={props.handleOnChangeDownPayment}
         />
       </InputGroup>
     </Col>
   </Row>
  )
}

export default LeftMortGageInputCalculator