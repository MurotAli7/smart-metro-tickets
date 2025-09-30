import React from "react";
import Navbar from "../components/navbar";

function Settings() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="settings">
          <h2 className="set-title">Sozlamalar</h2>
          <p className="set-text">Profil ma’lumotlari</p>
          <input className="set-inp" type="text" placeholder="Ism" />
          <input className="set-inp" type="email" placeholder="Email" />
          <div className="set-btn-box">
            <button className="set-btn">Yangilash</button>
            <button className="set-btn" style={{ background: "red" }}>Chiqish</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Settings;
