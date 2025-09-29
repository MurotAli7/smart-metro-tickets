import React from "react";
import Navbar from "../components/navbar";

function Payment() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>To‘lov</h2>
        <p>Balansdan yoki karta orqali to‘lash mumkin.</p>
        <button>Balansdan to‘lash</button>
        <button>Karta orqali to‘lash</button>
      </div>
    </div>
  );
}

export default Payment;
