import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const localAPI = "http://localhost:3000/recipes";

const Meals = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${localAPI}/${id}`);
        if (!res.ok) throw new Error("Meal not found");
        const data = await res.json();
        setMeal(data);
      } catch (error) {
        console.error(error);
        setMeal(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getMeal();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!meal) return <p>Meal not found 😢</p>;

  return (
    <div
      className="meal-card"
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1rem",
        backgroundColor: "#111",
        borderRadius: "10px",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.7)",
      }}
    >
      <img
        src={meal.image}
        alt={meal.title}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />
      <div style={{ margin: "1rem" }}>
        <section>
          <h3>Ingredients:</h3>
          <ul>
            {meal.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: "1rem" }}>
          <h3>Macros:</h3>
          <ul>
            <li>Protein:{meal.Protein}</li>
            <li>Carbs: {meal.Carbs}</li>
            <li>Fat:{meal.Fat}</li>
            <li>Calories:{meal.calories}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Meals;
