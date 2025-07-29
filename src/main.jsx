import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Meals from "./pages/Meals.jsx";
import Search from "./pages/Search.jsx";
import AddMeal from "./pages/AddMeal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="meals/:id" element={<Meals />} />
          <Route path="search" element={<Search />} />
          <Route path="add-NewMeal" element={<AddMeal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
