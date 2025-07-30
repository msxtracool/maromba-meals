import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <GiMeal />
          Maromba Meals Logs
        </Link>
      </h2>
      <div className="nav-actions">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Meal search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <IoIosSearch />
          </button>
        </form>

        <Link to="/add-NewMeal" className="add-meal-link">
          <IoIosAddCircleOutline size={30} color="#f7d354" />
          <span> Add Meal</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
