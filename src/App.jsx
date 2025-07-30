import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./pages/Home.jsx";
import Meals from "./pages/Meals.jsx";
import Search from "./pages/Search.jsx";
import AddMeal from "./pages/AddMeal.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals/:id" element={<Meals />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-NewMeal" element={<AddMeal />} />
      </Routes>
    </div>
  );
}

export default App;
