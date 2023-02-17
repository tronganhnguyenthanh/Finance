import React from "react"
const RightMortGageResultCalculator = (props) => {
  return (
   <span className="mortgage-loan-amount">
     Estimated repayment per month:
     <span className="text-loan-amount">{props.estimated_repayment}</span>
    </span>
  )
}

export default RightMortGageResultCalculator