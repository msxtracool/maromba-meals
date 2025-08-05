import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const localAPI = `${import.meta.env.VITE_JSONSERVER_URL}/recipes`;

const Meals = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Para redirecionar após deletar

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

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal?"
    );
    if (!confirmDelete) return;

    try {
      // Requisição DELETE usando axios
      const res = await axios.delete(`${localAPI}/${id}`);

      // Verifica se a resposta foi ok
      if (res.status === 200) {
        alert("Meal deleted successfully!");
        navigate("/"); // Redireciona para a página inicial
      } else {
        alert("Failed to delete the meal.");
      }
    } catch (error) {
      console.error("Error deleting meal:", error);
      alert("Something went wrong while deleting.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!meal) return <p>Meal not found 😢</p>;

  return (
    <div className="page">
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Link to={`/edit/${meal.id}`} className="edit-button">
              Edit
            </Link>
            <button onClick={handleDelete} className="edit-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
