require('dotenv').config();
import axios from "axios";

const IngredientesGet = async (req, res) => {
  try {
    const response = await axios.get(urlIngredientes);
    const allIngredients = response.data;
    res.status(200).json(allIngredients);
  } catch (error) {
    console.error("Error al obtener ingredientes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default IngredientesGet;
