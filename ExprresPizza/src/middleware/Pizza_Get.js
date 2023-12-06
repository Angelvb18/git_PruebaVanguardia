require('dotenv').config();
import axios from "axios";


const PizzaGet = async (req, res) => {
  try {
    const response = await axios.get(urlPizza);
    const allIngredients = response.data;
    res.status(200).json(allIngredients);
  } catch (error) {
    console.error("Error al obtener ingredientes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default PizzaGet;
