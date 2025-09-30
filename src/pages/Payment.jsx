import React from "react";
import Navbar from "../components/navbar";

function Payment() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="payment">
          <h2 className="payment-title">To‘lov</h2>
          <p className="payment-text">Balansdan yoki karta orqali hisobingizni to'ldirishingiz mumkin.</p>
          <div className="pay-btn-box">
            <button className="payment-btn">Balansdan to‘lash</button>
            <button className="payment-btn">Karta orqali to‘lash</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
