import { useState, useEffect } from "react";
import MealCard from "../Components/MealCard";

const mealsURL = import.meta.env.VITE_SEARCH; //API SPOONACULAR
const apiKey = import.meta.env.VITE_API_KEY; //API KEY SPOONACULAR

const Home = () => {
  const [topMeals, setTopMeals] = useState([]);

  const getTopMeals = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMeals(data.results);
  };

  useEffect(() => {
    const topMealsURL = `${mealsURL}?apiKey=${apiKey}&addRecipeInformation=true&number=30`;
    getTopMeals(topMealsURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top Meals:</h2>
      <div className="meals-container">
        {topMeals.length === 0 && <p>Loading...</p>}
        {topMeals.length > 0 &&
          topMeals.map((meals) => <MealCard key={meals.id} meals={meals} />)}
      </div>
    </div>
  );
};

export default Home;
