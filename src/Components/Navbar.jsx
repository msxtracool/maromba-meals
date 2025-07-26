import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <GiMeal />
          Maromba Meals
        </Link>
      </h2>
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
    </nav>
  );
};

export default Navbar;
