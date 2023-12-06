import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Formulario from './Componets/Formulario'
import Menu from './Componets/F_Menu';
import Ingredientes from './Componets/F_Ingredientes';
import Pizza from './Componets/Pizza';
import Ingredientes_list from './Componets/Ingredientes_list';
import Menu_list from './Componets/Menu_list';
import Pizza_list from './Componets/Pizza_list';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Pizza/>
   <Ingredientes/>
   <Menu/>
   <Ingredientes_list/>
   <Menu_list/>
   <Pizza_list/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
