import React, {useState} from "react"
import {Row, Col, Form, InputGroup} from "react-bootstrap"
import RightMortGagageCalculatorTextBlock from "./RightMortGagageCalculatorTextBlock"
const LeftMortGageCalculator = () => {
  const [purchasePrice, setPurChasePrice] = useState(450000)
  const [downPayment, setDownPayMent] = useState(135000)
  const [rePaymentTime, setRePaymentTime] = useState(25)
  const [interestRate, setInterestRate] = useState(3)
  const handleOnChangePurChasePrice = (e) => {
    let purchasePricevalue = e.target.value
    setPurChasePrice(purchasePricevalue)
  }
  const handleOnChangeDownPayment = (e) => {
    let downPaymentValue = e.target.value
    setDownPayMent(downPaymentValue)
  }
  const handleOnChangeRepaymentTime = (e) => {
    let rePaymentTimeValue = e.target.value
    setRePaymentTime(rePaymentTimeValue)
  }
  const handleOnChangeInterestRate = (e) => {
    let interestRateValue = e.target.value
    setInterestRate(interestRateValue)
  }
  return (
   <div className="mortgage-calculator">
     <div className="left-mortgage-calculator">
        <h2 className="title-mortgage-calculator">mortgage calculator</h2>
        <p className="title-mortgage-calculator-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore.
        </p>
        <Row>
          <Col lg="6" className="responsive-purchase-price">
            <Form.Label className="mortgage-label">Purchase Price: ${purchasePrice}</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
              <Form.Control 
                aria-label="Amount (to the nearest dollar)"
                className="mortgage-input-purchase"
                onChange={handleOnChangePurChasePrice}
              />
            </InputGroup>
          </Col>
          <Col lg="6" className="right-down-payment">
            <Form.Label className="mortgage-label-down-payment">Down Payment: ${downPayment}</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
              <Form.Control 
                aria-label="Amount (to the nearest dollar)"
                className="mortgage-input-purchase"
                onChange={handleOnChangeDownPayment}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="responsive-repayment-time">
            <Form.Label className="mortgage-label">
              Repayment time: {rePaymentTime + " years "}
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
              <Form.Control 
                aria-label="Amount (to the nearest dollar)"
                className="mortgage-input-purchase"
                onChange={handleOnChangeRepaymentTime}
              />
            </InputGroup>
          </Col>
          <Col lg="6" className="right-down-payment">
            <Form.Label className="mortgage-label">Interest Rate: {interestRate + "%"}</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text className="mortgage-label">$</InputGroup.Text>
              <Form.Control 
                aria-label="Amount (to the nearest dollar)"
                className="mortgage-input-purchase"
                onChange={handleOnChangeInterestRate}
              />
            </InputGroup>
          </Col>
        </Row>
        <span className="mortgage-loan-amount">
           Loan amount: 
           <span className="text-loan-amount">
             $ {(purchasePrice - downPayment).toLocaleString()}
           </span>
        </span>
        <br/> 
        <span className="mortgage-loan-amount">
           Estimated repayment per month:
           <span className="text-loan-amount">
             ${(Math.floor((purchasePrice - downPayment) * interestRate * (1 + interestRate)^rePaymentTime/(1 + interestRate^rePaymentTime) - 1).toLocaleString())}
           </span>
        </span>
     </div>
     <RightMortGagageCalculatorTextBlock/>
   </div>
  )
}

export default LeftMortGageCalculator