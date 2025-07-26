import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MealCard from "../Components/MealCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("q");

  useEffect(() => {
    const fetchSearchedMeals = async () => {
      setLoading(true);
      try {
        const url = `${searchURL}?apiKey=${apiKey}&query=${query}&number=20&addRecipeInformation=true`;
        const res = await fetch(url);
        const data = await res.json();
        setMeals(data.results);
      } catch (error) {
        console.error("Search Error", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchedMeals();
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Search results: <span className="query-text">{query}</span>
      </h2>

      {loading && <p>Loading...</p>}

      {!loading && meals.length === 0 && <p>Meal not found 😢</p>}

      <div className="meals-container">
        {!loading &&
          meals.length > 0 &&
          meals.map((meal) => <MealCard key={meal.id} meals={meal} />)}
      </div>
    </div>
  );
};

export default Search;
