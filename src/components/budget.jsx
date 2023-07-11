import React, { useState } from 'react';
import './styles/budget.css';

const BudgetForm = () => {
  const [budget, setBudget] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [bills, setBills] = useState([]);
  const [savings, setSavings] = useState(0);
  const [investment, setInvestment] = useState(0);

  const handleBudgetChange = (event) => {
    setBudget(parseFloat(event.target.value));
  };

  const handleBillAmountChange = (event) => {
    setBillAmount(parseFloat(event.target.value));
  };

  const handleAddBill = (event) => {
    event.preventDefault();
    if (billAmount) {
      const newBill = {
        amount: billAmount,
      };
      setBills([...bills, newBill]);
      setBillAmount(''); // Reset billAmount after adding the bill
    }
  };

  const calculateSavingsAndInvestment = () => {
    const totalBills = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const remainingBudget = budget - totalBills;
    const savingsAmount = remainingBudget * (3 / 4);
    const investmentAmount = remainingBudget * (1 / 4);
    setSavings(savingsAmount);
    setInvestment(investmentAmount);
  };

  const oneYearSavings = savings * 12;
  const oneYearInvestment = investment * 12;

  return (
    <div className="budget-container">
      <h2>Budget and Bills</h2>
      <form className="budget-form">
        <label>
          <input type="number" value={budget} onChange={handleBudgetChange} placeholder="budget" />
        </label>
        <br />
        <label>
          <input type="number" value={billAmount} onChange={handleBillAmountChange} placeholder="bills" />
        </label>
        <br />
        <br />
        <button className="bill-btn" onClick={handleAddBill}>Add Bill</button>
      </form>

      <button className="budget-calculate-btn" onClick={calculateSavingsAndInvestment}>
        Calculate Savings and Investment
      </button>
      <div className="form-output">
      <h3>Budget: {budget}</h3>
      <h3>Bills: {bills.map((bill) => `$${bill.amount}`).join(', ')}</h3>

      <h3>Savings: ${savings}</h3>
      <h3>Investment: ${investment}</h3>
      </div>
      <div className="year">
        <h3>Annual Savings: ${oneYearSavings}</h3>
        <h3>Annual Investment: ${oneYearInvestment}</h3>
      </div>
    </div>
  );
};

export default BudgetForm;


