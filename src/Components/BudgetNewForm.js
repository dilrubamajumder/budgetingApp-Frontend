import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BudgetNewForm() {
    const navigate = useNavigate()

  const [budget, setBudget] = useState({
        date: "",
        item_name:"",
        amount: "",
        from: "",
        category: "",
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    budget.amount = Number(budget.amount)

    axios
    .post(`${API}/budgets`, budget)
    .then(() => navigate("/budgets"))
    .catch ((err) => console.error(err))
  };
  return (
    <div className="New">
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        value={budget.date}
        pattern="date"
        type="date"
        onChange={handleTextChange}
        placeholder="yyyy-mm-dd"
        required
      />
      <label htmlFor="item_name">Item:</label>
      <input
        id="item_name"
        value={budget.item_name}
        type="text"
        placeholder="income, savings, cat food, grocery etc."
        onChange={handleTextChange}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        required
        value={budget.amount}
        placeholder="50, 100, -10"
        onChange={handleTextChange}
      />
      <label htmlFor="from">From:</label>
      <textarea
        id="from"
        value={budget.from}
        onChange={handleTextChange}
        placeholder="Employer, Bank, Amazon"
      />
      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        required
        value={budget.category}
        placeholder="Income, Savings, Spending"
        onChange={handleTextChange}
      />   
      <br />
      <input type="submit" />
    </form>

    </div>
  )
}

export default BudgetNewForm