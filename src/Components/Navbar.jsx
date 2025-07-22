import { Link } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <GiMeal />
           Maromba Meals
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Meal search" />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
