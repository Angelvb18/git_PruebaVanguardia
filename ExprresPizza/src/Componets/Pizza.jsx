import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Boton from "./Boton";
import "../Assets/Forms.css";

function Ingredientes() {
  const [pizza, setPizza] = useState({
    nombre: "",
    sku: "",
    ingredientes: "",
    size: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    sku: "",
    ingredientes: "",
    size: "",
  });

  const handleInputChange = (e) => {
    setPizza({
      ...pizza,
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

    // Validar que los campos no estén vacíos y que size sea mayor que -1
    let nuevosErrores = {};

    if (pizza.nombre.trim() === "") {
      nuevosErrores.nombre = "Este campo no puede estar vacío";
    }

    if (pizza.sku.trim() === "") {
      nuevosErrores.sku = "Este campo no puede estar vacío";
    }

    if (pizza.ingredientes === "") {
      nuevosErrores.ingredientes = "Este campo no puede estar vacío";
    }

    if (pizza.size.trim() === "") {
      nuevosErrores.size = "Este campo no puede estar vacío";
    }

    // Si hay errores, mostrarlos y evitar enviar el formulario
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      console.log("Error: Los datos de la pizza no son válidos");
      return;
    }

    // Si pasó la validación, puedes realizar acciones con los datos de la pizza
    console.log("Pizza válida:", pizza);
  };

  return (
    <>
      <div className="container-forms">
        <h1 className="header">Pizza</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={pizza.nombre}
              onChange={handleInputChange}
            />
            {errores.nombre && <p className="error-msg">{errores.nombre}</p>}

            <Form.Label>SKU</Form.Label>
            <Form.Control
              type="text"
              name="sku"
              value={pizza.sku}
              onChange={handleInputChange}
            />
            {errores.sku && <p className="error-msg">{errores.sku}</p>}

            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              type="number"
              name="ingredientes"
              value={pizza.ingredientes}
              onChange={handleInputChange}
            />
            {errores.ingredientes && (
              <p className="error-msg">{errores.ingredientes}</p>
            )}

            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              value={pizza.size}
              onChange={handleInputChange}
            />
            {errores.size && <p className="error-msg">{errores.size}</p>}
          </Form.Group>

          <Boton etiqueta={"Crear Pizza"} onClick={(e) => handleSubmit(e)} />
        </Form>
      </div>
    </>
  );
}

export default Ingredientes;
