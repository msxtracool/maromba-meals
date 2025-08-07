import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Form initial state
const AddMeal = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    Protein: "",
    Carbs: "",
    Fat: "",
    calories: "",
    image: "",
  });

  //Redirect to home page after sending form

  const navigate = useNavigate();

  // Update and submit form values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      calories: Number(formData.calories),
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_JSONSERVER_URL}/recipes`,
        dataToSend
      );
      alert("Meal Added!");
      navigate("/");
    } catch (error) {
      console.error("Erro adding meal", error);
      alert("Erro adding meal");
    }
  };

  //Render the form
  return (
    <div className="add-meal-container">
      <h2>New Meal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ingredients (comma separated):
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Protein:
          <input
            type="text"
            name="Protein"
            value={formData.Protein}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Carbs:
          <input
            type="text"
            name="Carbs"
            value={formData.Carbs}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fat:
          <input
            type="text"
            name="Fat"
            value={formData.Fat}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMeal;
