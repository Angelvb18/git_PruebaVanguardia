import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Boton from "./Boton";
import "../Assets/Forms.css";

function Ingredientes() {
  const [action, setAction] = useState("Ingrediente");
  const [ingrediente, setIngrediente] = useState({
    nombre: "",
    sku: "",
    fechaVencimiento: "",
    fechaCompra: "",
    precio: "",
    color: ""
  });
  const [errores, setErrores] = useState({});

  const handleInputChange = (e) => {
    setIngrediente({
      ...ingrediente,
      [e.target.name]: e.target.value
    });
  };

  const validarFormulario = () => {
    let errores = {};

    // Validar que los campos no estén vacíos
    for (const key in ingrediente) {
      if (!ingrediente[key]) {
        errores[key] = "Este campo no puede estar vacío";
      }
    }

    // Validar formato de fechas
    const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!fechaRegex.test(ingrediente.fechaVencimiento)) {
      errores.fechaVencimiento = "Formato de fecha inválido";
    }
    if (!fechaRegex.test(ingrediente.fechaCompra)) {
      errores.fechaCompra = "Formato de fecha inválido";
    }
    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Realizar acciones con el objeto "ingrediente"
      console.log("Ingrediente válido:", ingrediente);
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <div className="container-forms">
      <h1 className="header">Ingredientes</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={ingrediente.nombre}
            onChange={handleInputChange}
          />
          {errores.nombre && <p className="error-msg">{errores.nombre}</p>}

          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            name="sku"
            value={ingrediente.sku}
            onChange={handleInputChange}
          />
          {errores.sku && <p className="error-msg">{errores.sku}</p>}

          <Form.Label>Fecha Vencimiento</Form.Label>
          <Form.Control
            type="text"
            name="fechaVencimiento"
            value={ingrediente.fechaVencimiento}
            onChange={handleInputChange}
          />
          {errores.fechaVencimiento && (
            <p className="error-msg">{errores.fechaVencimiento}</p>
          )}

          <Form.Label>Fecha Compra</Form.Label>
          <Form.Control
            type="text"
            name="fechaCompra"
            value={ingrediente.fechaCompra}
            onChange={handleInputChange}
          />
          {errores.fechaCompra && (
            <p className="error-msg">{errores.fechaCompra}</p>
          )}

          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="Number"
            name="precio"
            value={ingrediente.precio}
            onChange={handleInputChange}
          />
          {errores.precio && <p className="error-msg">{errores.precio}</p>}

          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={ingrediente.color}
            onChange={handleInputChange}
          />
          {errores.color && <p className="error-msg">{errores.color}</p>}
        </Form.Group>

        <Boton etiqueta={"Crear Ingrediente"} onClick={validarFormulario}/>
      </Form>
    </div>
  );
}

export default Ingredientes;
