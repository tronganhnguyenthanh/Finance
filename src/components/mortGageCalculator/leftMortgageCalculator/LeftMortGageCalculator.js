import React, {useState} from "react"
import LeftMortGageInputCalculator from "./LeftMortGageInputCalculator"
import LeftMortGageResultCalculator from "./LeftMortGageResultCalculator"
import RightMortGagageCalculatorTextBlock from "../rightMortGageCalculator/RightMortGagageCalculatorTextBlock"
import RightMortGageResultCalculator from "../rightMortGageCalculator/RightMortGageCalculator"
import RightMortGageInputCalculator from "../rightMortGageCalculator/RightMortGageInputCalculator"
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
        <LeftMortGageInputCalculator 
           purchasePrice={purchasePrice}
           downPayment={downPayment}
           handleOnChangePurChasePrice={handleOnChangePurChasePrice}
           handleOnChangeDownPayment={handleOnChangeDownPayment}
         />
        <RightMortGageInputCalculator
           repaymentTime={rePaymentTime}
           interestRate={interestRate}
           handleOnChangeRepaymentTime={handleOnChangeRepaymentTime}
           handleOnChangeInterestRate={handleOnChangeInterestRate}
        />
        <LeftMortGageResultCalculator
          loanAmount={(purchasePrice - downPayment).toLocaleString()}
        />
        <br/>
        <RightMortGageResultCalculator 
          estimated_repayment={"$" + (Math.floor((purchasePrice - downPayment) * interestRate * (1 + interestRate)^rePaymentTime/(1 + interestRate^rePaymentTime) - 1).toLocaleString())}
        />
     </div>
     <RightMortGagageCalculatorTextBlock/>
   </div>
  )
}

export default LeftMortGageCalculator