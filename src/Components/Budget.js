import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <tr className="index-list">
      <td>
        <h3>{budget.date}</h3>
        
      </td>
      <td>
          {budget.item_name}
      </td>
      <td>
        <h3 className="index-amount"><Link to={`/budgets/${index}`}>{budget.amount}</Link></h3>
      </td>
    </tr>
  
  );
}

export default Budget;