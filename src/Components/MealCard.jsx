import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const MealCard = ({ meals, showLink = true }) => {
  return (
    <div className="meal-card">
      <img src={meals.image} alt={meals.title} />
      <h2>{meals.title}</h2>
      <p>
        <FaLeaf style={{ color: "green" }} /> {meals.calories}
      </p>
      {showLink && <Link to={`/meals/${meals.id}`}>Description</Link>}
    </div>
  );
};

export default MealCard;
