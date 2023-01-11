import { useEffect } from "react";

import Budget from "./Budget";
import axios from "axios";
const API = process.env.REACT_APP_API_URL


function Budgets({budgets, setBudgets}) {

    useEffect(() => {
      axios
      .get(`${API}budgets`)
      .then((res) => setBudgets(res.data))
      .catch(err => console.error(err))
    },[])
  
  

  return (
    <div>
        <section>
        <table>
          
          <thead className="index-cart">
            <tr>
              <th><h2>Date:</h2></th>
              <th><h2>Item:</h2></th>
              <th><h2 className="amount">Amount:</h2></th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Budgets