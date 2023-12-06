// Tabla.js
import React from "react";

const Tabla = ({ datos }) => {
  if (!datos || datos.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  // Obtener las claves (nombres de columnas) del primer objeto en el array
  const columnas = Object.keys(datos[0]);

  return (
    <table border="1">
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            {columnas.map((columna) => (
              <td key={columna}>{fila[columna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
