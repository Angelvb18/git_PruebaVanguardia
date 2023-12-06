import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Boton from "./Boton";
import "../Assets/Forms.css";

function Menu() {
  const [menu, setMenu] = useState({
    nombre: "",
    sku: "",
    combo: "",
    precio: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    sku: "",
    combo: "",
    precio: "",
  });

  const handleInputChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });

    // Limpiar el mensaje de error cuando el usuario comienza a escribir
    setErrores({
      ...errores,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos y que precio sea mayor que -1
    let nuevosErrores = {};

    if (menu.nombre.trim() === "") {
      nuevosErrores.nombre = "Este campo no puede estar vacío";
    }

    if (menu.sku.trim() === "") {
      nuevosErrores.sku = "Este campo no puede estar vacío";
    }

    if (menu.combo.trim() === "") {
      nuevosErrores.combo = "Este campo no puede estar vacío";
    }

    if (menu.precio === "" || parseFloat(menu.precio) < 0) {
      nuevosErrores.precio = "El precio debe ser mayor o igual a 0";
    }

    // Si hay errores, mostrarlos y evitar enviar el formulario
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      console.log("Error: Los datos del menú no son válidos");
      return;
    }

    // Si pasó la validación, puedes realizar acciones con los datos del menú
    console.log("Menú válido:", menu);
  };

  return (
    <div className="container-forms">
      <h1 className="header">Menu</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={menu.nombre}
            onChange={handleInputChange}
          />
          {errores.nombre && <p className="error-msg">{errores.nombre}</p>}

          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            name="sku"
            value={menu.sku}
            onChange={handleInputChange}
          />
          {errores.sku && <p className="error-msg">{errores.sku}</p>}

          <Form.Label>Combo</Form.Label>
          <Form.Control
            type="text"
            name="combo"
            value={menu.combo}
            onChange={handleInputChange}
          />
          {errores.combo && <p className="error-msg">{errores.combo}</p>}

          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="precio"
            value={menu.precio}
            onChange={handleInputChange}
          />
          {errores.precio && <p className="error-msg">{errores.precio}</p>}
        </Form.Group>

        <Boton etiqueta={"Crear Menú"} onClick={(e) => handleSubmit(e)} />
      </Form>
    </div>
  );
}

export default Menu;
