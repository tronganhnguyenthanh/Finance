import React from "react"
import {Row, Col, Form, InputGroup} from "react-bootstrap"
const RightMortGageInputCalculator = (props) => {
  return (
   <Row>
     <Col lg="6" className="responsive-purchase-price">
       <Form.Label className="mortgage-label">Repayment time: {props.repaymentTime + " years "}</Form.Label>
       <InputGroup className="mb-3">
         <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
         <Form.Control 
           className="mortgage-input-purchase"
           onChange={props.handleOnChangeRepaymentTime}
         />
       </InputGroup>
     </Col>
     <Col lg="6" className="right-down-payment">
       <Form.Label className="mortgage-label">Interest rate: {props.interestRate + "%"}</Form.Label>
       <InputGroup className="mb-3">
         <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
         <Form.Control className="mortgage-input-purchase"/>
       </InputGroup>
     </Col>
   </Row>
  )
}

export default RightMortGageInputCalculator