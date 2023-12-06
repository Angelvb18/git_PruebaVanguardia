import React, { useState, useEffect } from "react";
import "../Assets/LoginSignup.css";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

function LoginSignup() {
  const [action, setAction] = useState("Login");
  const [formErrosLogin, setFormErrosLogin] = useState({
    Estado: "Inicial",
  });
  const [formErrosSignUp, setFormErrosSignUp] = useState({
    Estado: "Inicial",
  });
  const [entradas_login, setentradas_login] = useState({
    email: "",
    password: "",
  });
  const [entradasSignUp, setentradasSignUp] = useState({
    email: "",
    password: "",
    passwordconf: "",
    nombre: "",
  });

  const quitarMensajeErrorLogin = (e) => {
    //console.log(e.target.name);
    setFormErrosLogin({ ...formErrosLogin, [e.target.name]: "" });
    if (Object.keys(formErrosLogin).length === 0) {
      setFormErrosLogin({ Estado: "Inicial" });
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    if (action === "Login") {
      setentradas_login({ ...entradas_login, [e.target.name]: e.target.value });
    } else {
      setentradasSignUp({ ...entradasSignUp, [e.target.name]: e.target.value });
    }
  };

  const cleanLogin = () => {
    setAction("Login");
    setFormErrosLogin({ Estado: "Inicial" });
    setentradas_login({ email: "", password: "" });
    let inputs = document.getElementsByClassName("form-control-coti");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  const validateLogin = () => {
    const erros_login = {};
    if (entradas_login.email === "") {
      erros_login.email = "Ingrese su Email";
    }
    if (entradas_login.password === "") {
      erros_login.password = "Ingrese su Contraseña";
    }
    setFormErrosLogin(erros_login);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              onClick={(e) => quitarMensajeErrorLogin(e)}
              className="form-control-coti"
              name="email"
              type="email"
              placeholder="Email Id"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <p className="mensaje_error-coti">{formErrosLogin.email}</p>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              onClick={(e) => quitarMensajeErrorLogin(e)}
              className="form-control-coti"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="mensaje_error-coti">{formErrosLogin.password}</p>
        </div>
      </div>

      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={action === "Login" ? validateLogin : cleanLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
