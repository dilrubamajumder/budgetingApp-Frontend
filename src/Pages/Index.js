import React from "react";
import Budgets from "../Components/Budgets";
import { useEffect, useState } from "react";

function Index() {
  const [budgets, setBudgets] = useState([]);
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState("default");

  useEffect(() => {
    const calculatedTotal = budgets.reduce(
      (total, budget) => parseInt(total) + parseInt(budget.amount),
      0
    );
    setTotal(calculatedTotal);
  }, [budgets]);

  useEffect(() => {
    if (total > 1000) {
      setColor("green");
    } else if (total < 0) {
      setColor("red");
    } else {
      setColor("default");
    }
  }, [total]);

  return (
    <div className="index-pg">
      <div>
        <img
          className="indexpg-img"
          src="https://cdn.dribbble.com/users/1280935/screenshots/6974685/media/ec4c386222b837da0ff6eabec3f59ba3.gif"
          alt="indexpg-img"
          width={500}
        />
      </div>
        <div className="index-amn">
          {" "}
          <h1 className={color}>Account Balance: ${total}</h1>
          <Budgets budgets={budgets} setBudgets={setBudgets} />
        </div>
    </div>
  );
}

export default Index;
