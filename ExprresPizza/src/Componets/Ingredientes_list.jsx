// Tu componente principal
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabla from "./Tabla";
import Boton from "./Boton";
const Ingredientes = () => {
  const [ingredientes, setIngredientes] = useState([]);

    const obtenerIngredientes = async () => {
      try {
        console.log(process.env.REACT_APP_urlIngredientes)
        const response = await axios.get(process.env.REACT_APP_urlIngredientes);
        setIngredientes(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener ingredientes:", error);
      }
    };


  return (
    <div className="container">
      <h1>Lista de Ingredientes</h1>
      <Boton etiqueta={"Listar Ingredientes"} onClick={obtenerIngredientes}/>
      <Tabla datos={ingredientes} />
    </div>
  );
};

export default Ingredientes;
