import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Kirish</h2>
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Parol" />
      <button onClick={handleLogin}>Kirish</button>
      <p>Hisobingiz yo'qmi? <Link to="/register">Ro'yxatdan o'ting</Link></p>
    </div>
  );
}

export default Login;
