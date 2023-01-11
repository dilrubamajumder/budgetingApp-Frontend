import { useState, useEffect } from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BudgetEdit() {
  const navigate = useNavigate()
  let { index } = useParams();

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

  const handleCheckboxChange = () => {
    setBudget({ ...budget, isFavorite: !budget.isFavorite });
  };

  useEffect(() => {
    axios
    .get(`${API}/budgets/${index}`)
    .then((res) => setBudget(res.data))
    .catch(err => console.log(err))
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
    .put(`${API}/budgets/${index}`, budget)
    .then((res) => {
      setBudget(res.data)
      navigate(`/budgets/${index}`)
    })
    .catch(err => console.log(err))


  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={budget.date}
          pattern="date"
          type="date"
          onChange={handleTextChange}
          placeholder="mm/dd/yyyy"
          required
        />
        <label htmlFor="item_name">Item:</label>
        <input
          id="item_name"
          type="text"
          value={budget.item_name}
          placeholder="income, savings, cat food, grocery etc."
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          required
          value={budget.amount}
          placeholder="50, 100, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from"
          value={budget.from}
          onChange={handleTextChange}
          placeholder="employer, bank, pet store"
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          value={budget.category}
          placeholder="income, savings, food, rent"
          onChange={handleCheckboxChange}
        />   
        <br />

        <input type="submit" />
      </form>
      <Link to={`/budgets/${index}`}>
        <button className="nvm">Nevermind!</button>
      </Link>
    </div>
  );
}

export default BudgetEdit;
