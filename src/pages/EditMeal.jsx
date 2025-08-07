import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditMeal = () => {
  const { id } = useParams(); // Get URL id
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    Protein: "",
    Carbs: "",
    Fat: "",
    calories: "",
    image: "",
  });

  // Get current meal data
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_JSONSERVER_URL}/recipes/${id}`
        );
        const meal = res.data;
        setFormData({
          ...meal,
          ingredients: meal.ingredients.join(", "), // Array to string
        });
      } catch (err) {
        console.error("Error searching Meal", err);
        toast.error("Data Error Meal Search.");
      }
    };

    fetchMeal();
  }, [id]);

  // Update form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send edit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMeal = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      calories: Number(formData.calories),
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_JSONSERVER_URL}/recipes/${id}`,
        updatedMeal
      );
      toast.success("Meal successfully updated");
      navigate("/");
    } catch (error) {
      console.error("Erro meal update", error);
      toast.error("Erro meal update");
    }
  };

  return (
    <div className="add-meal-container">
      <h2>Edit Meal</h2>
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditMeal;
