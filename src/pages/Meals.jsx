import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../Components/MealCard";

const mealsURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Meals = () => {
  const { id } = useParams();
  const [meals, setMeal] = useState(null);

  const getMeal = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("🔍 Dados da API:", data); // Verifica o conteúdo
      setMeal(data);
    } catch (error) {
      console.error("Erro ao buscar dados da receita:", error);
    }
  };

  useEffect(() => {
    const mealURL = `${mealsURL}/${id}/information?apiKey=${apiKey}`;
    getMeal(mealURL);
  }, [id]);

  return (
    <div className="meal-page">
      {meals ? ( // corrigido aqui
        <>
          <MealCard meals={meal} showLink={false} />
          <h3>Ingredientes:</h3>
          <ul>
            {meals.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p> // opcional: mensagem enquanto carrega
      )}
    </div>
  );
};

export default Meals;
