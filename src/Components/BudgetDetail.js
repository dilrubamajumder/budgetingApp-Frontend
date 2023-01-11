import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BudgetDetail() {
  const [budget, setBudget] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/budgets/${index}`)
      .then((res) => setBudget(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/budgets/${index}`)
      .then((res) => navigate("/budgets"))
      .catch((err) => console.log(err));
  };

  return (
    <article >
      <div className="details-pg">
        <div>
          <img
            className="detailpg-img"
            src="https://img.money.com/2020/05/mmds42_budget_app_1a72greenbg.gif"
            alt="detailpg-img"
            width={600}
          />
        </div>
        <div className="details-article">
          <h1>Item: {budget.item_name}</h1>
          <h3>From: {budget.from}</h3>
          <h3>Category:{budget.category}</h3>
          <p>Date:{budget.date}</p>
          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/budgets`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/budgets/${index}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              {" "}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BudgetDetail;
