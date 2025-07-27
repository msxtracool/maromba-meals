import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MealCard from "../Components/MealCard";

const localAPI = "http://localhost:3000/recipes";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    const searchMeals = async () => {
      setLoading(true);
      try {
        const res = await axios.get(localAPI);
        const filtered = res.data.filter((meal) => {
          const titleMatch = meal.title.toLowerCase().includes(query);
          const ingredientsMatch = meal.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(query)
          );
          return titleMatch || ingredientsMatch;
        });

        setMeals(filtered);
      } catch (error) {
        console.error("Erro trying to search meal", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim() !== "") {
      searchMeals();
    } else {
      setMeals([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Search results: <span className="query-text">{query || "all"}</span>
      </h2>

      {loading && <p>Loading...</p>}
      {!loading && meals.length === 0 && <p>Meal not found 😢</p>}

      <div className="meals-container">
        {!loading &&
          meals.map((meal) => <MealCard key={meal.id} meals={meal} />)}
      </div>
    </div>
  );
};

export default Search;
