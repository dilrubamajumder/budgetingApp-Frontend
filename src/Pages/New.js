import React from "react";
import BudgetNewForm from "../Components/BudgetNewForm";

function New() {
  return (
    <div className="New-pg">
      <div>
        <img
          className="new-logo"
          src="https://media.baamboozle.com/uploads/images/291859/1628108465_100439_gif-url.gif"
          alt="nav-logo"
          width={200}
        />
      </div>
      <div>
        <h2>Add New Transaction</h2>
        <BudgetNewForm />
      </div>
    </div>
  );
}

export default New;
