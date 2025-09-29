import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Ro'yxatdan o'tish</h2>
      <input type="text" placeholder="Ism" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Parol" />
      <button onClick={handleRegister}>Ro'yxatdan o'tish</button>
      <p>Hisobingiz bormi? <Link to="/">Kirish</Link></p>
    </div>
  );
}

export default Register;
