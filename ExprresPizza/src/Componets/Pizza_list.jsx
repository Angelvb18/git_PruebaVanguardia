// Tu componente principal
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabla from "./Tabla";
import Boton from "./Boton";
const Pizza = () => {
  const [Pizza, setPizza] = useState([]);

    const obtenerPizza = async () => {
      try {
        console.log(process.env.REACT_APP_urlPizza)
        const response = await axios.get(process.env.REACT_APP_urlPizza);
        setPizza(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener Pizza:", error);
      }
    };


  return (
    <div className="container">
      <h1>Lista de Pizza</h1>
      <Boton etiqueta={"Listar Pizza"} onClick={obtenerPizza}/>
      <Tabla datos={Pizza} />
    </div>
  );
};

export default Pizza;
