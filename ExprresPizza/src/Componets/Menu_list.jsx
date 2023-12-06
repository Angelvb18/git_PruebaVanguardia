// Tu componente principal
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabla from "./Tabla";
import Boton from "./Boton";
const Menus = () => {
  const [Menu, setMenu] = useState([]);

    const obtenerMenus = async () => {
      try {
        console.log(process.env.REACT_APP_urlMenu)
        const response = await axios.get(process.env.REACT_APP_urlMenu);
        setMenu(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener menus:", error);
      }
    };


  return (
    <div className="container">
      <h1>Lista de Menu</h1>
      <Boton etiqueta={"Listar Menu"} onClick={obtenerMenus}/>
      <Tabla datos={Menu} />
    </div>
  );
};

export default Menus;
