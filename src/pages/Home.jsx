import { useState, useEffect } from "react";
import axios from "axios";
import MealCard from "../Components/MealCard";

const localAPI = "http://localhost:3000/recipes";

const Home = () => {
  const [topMeals, setTopMeals] = useState([]);

  const getTopMeals = async () => {
    try {
      const res = await axios.get(localAPI);
      setTopMeals(res.data);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  useEffect(() => {
    getTopMeals();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Meals Gallery:</h2>
      <div className="meals-container">
        {topMeals.length === 0 && <p>Loading...</p>}
        {topMeals.length > 0 &&
          topMeals.map((meal) => <MealCard key={meal.id} meals={meal} />)}
      </div>
    </div>
  );
};

export default Home;
