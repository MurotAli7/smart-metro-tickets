import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Assalomu alaykum, foydalanuvchi!</h2>
        <p>Balans: 25 000 so'm</p>
        <Link to="/tickets"><button>Chipta olish</button></Link>
        <Link to="/qr"><button>QR Kod ko‘rish</button></Link>
      </div>
    </div>
  );
}

export default Dashboard;
