import React from 'react';
import Button from 'react-bootstrap/Button';
const Boton = ({ etiqueta ,onClick}) => {
  return (
    <Button variant='primary' onClick={onClick}>
      {etiqueta}
    </Button>
  );
};

export default Boton;
