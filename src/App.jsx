import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home.jsx";
import Meals from "./pages/Meals.jsx";
import Search from "./pages/Search.jsx";
import AddMeal from "./pages/AddMeal.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";

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
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
