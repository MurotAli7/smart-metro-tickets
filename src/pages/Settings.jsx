import React from "react";
import Navbar from "../components/navbar";

function Settings() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Sozlamalar</h2>
        <p>Profil ma’lumotlari</p>
        <input type="text" placeholder="Ism" />
        <input type="email" placeholder="Email" />
        <button>Yangilash</button>
        <br />
        <button style={{ background: "red" }}>Chiqish</button>
      </div>
    </div>
  );
}

export default Settings;
