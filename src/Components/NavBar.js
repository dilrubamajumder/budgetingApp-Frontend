import { Link } from "react-router-dom";


export default function NavBar() {

  return (
    <nav>
      <h1 className="BuG">
        <Link to="/">BuG-</Link>
      </h1>
      <div className="bothnav-btn">
        <button className="nav-btn">
        <Link to="/budgets">All Transaction</Link>
      </button>
      <button className="nav-btn">
        <Link to="/budgets/new">Add New</Link>
      </button>
      </div>
          </nav>
  );
}
