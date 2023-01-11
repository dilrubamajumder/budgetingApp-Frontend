import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";
import Toggle from "./Components/Toggle";

function App() {
  return (

    <div className="App">
         <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budgets" element={<Index />} />
            <Route path="/budgets/new" element={<New />} />
            <Route path="/budgets/:index" element={<Show />} />
            <Route path="/budgets/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Toggle />
      </Router>
    </div>
  );
}

export default App;
