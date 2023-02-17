import React from "react"
const LeftMortGageResultCalculator = (props) => {
   return (
    <span className="mortgage-loan-amount">
      Loan amount: 
      <span className="text-loan-amount">${props.loanAmount}</span>
    </span>
  )
}

export default LeftMortGageResultCalculator