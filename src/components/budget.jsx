import React, { useState } from 'react';
import './styles/budget.css';

const BudgetForm = () => {
  const [budget, setBudget] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [savings, setSavings] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [extra, setExtra] = useState(0);
  const [yearsTo100K, setYearsTo100K] = useState();

  const handleBudgetChange = (event) => {
    setBudget(parseFloat(event.target.value));
  };

  const handleBillAmountChange = (event) => {
    setBillAmount(parseFloat(event.target.value));
  };

  const calculateSavingsAndInvestment = () => {
    const remainingBudget = budget - billAmount;
    const savingsAmount = remainingBudget * (2 / 4);
    const investmentAmount = remainingBudget * (1 / 4);
    const extraAmount = (1/2) * budget - billAmount;
    setSavings(savingsAmount);
    setInvestment(investmentAmount);
    setExtra(extraAmount);

    const oneYearSavings = savingsAmount * 12;
    const oneYearInvestment = investmentAmount * 12;
    const total = oneYearSavings + oneYearInvestment;

    const years = Math.ceil(100000 / total);
    setYearsTo100K(years);
  };

  const oneYearSavings = savings * 12;
  const oneYearInvestment = investment * 12;
  const total = oneYearSavings + oneYearInvestment;

  return (
    <div className="budget-container">
      <h2>Monthly</h2>
      <form className="budget-form">
        <label>
          <input type="number" value={budget} onChange={handleBudgetChange} placeholder="budget" />
        </label>
        <br />
        <label>
          <input type="number" value={billAmount} onChange={handleBillAmountChange} placeholder="bills" />
        </label>
        <br />
      </form>

      <button className="budget-calculate-btn" onClick={calculateSavingsAndInvestment}>
        Calculate Savings and Investment
      </button>
      <div className="form-output">
        <h3>Budget: {budget}</h3>
        <h3>Bills: {billAmount}</h3>

        <h3>Savings: ${savings}</h3>
        <h3>Investment: ${investment}</h3>
        <h3>Extra: ${extra}</h3>
      </div>
      <div className="year">
        <h3>Annual Savings: ${oneYearSavings}</h3>
        <h3>Annual Investment: ${oneYearInvestment}</h3>
        <h3>Total: ${total}</h3>
        {yearsTo100K !== undefined && (
          <h3>
            {yearsTo100K === 1 ? 'Year' : 'Years'} to 100k: {yearsTo100K}
          </h3>
        )}
      </div>
    </div>
  );
};

export default BudgetForm;
