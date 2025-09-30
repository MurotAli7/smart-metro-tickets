import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login">
        <h2 className="Login-title">Kirish</h2>
        <input className="login-inp" type="text" placeholder="Login" />
        <input className="login-inp" type="password" placeholder="Parol" />
        <button className="login-btn" onClick={handleLogin}>Kirish</button>
        <p>Hisobingiz yo'qmi? <Link to="/register">Ro'yxatdan o'ting</Link></p>
      </div>
    </div>
  );
}

export default Login;
