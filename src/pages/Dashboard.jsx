import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          <h2 className="dashboard-title">Assalomu alaykum, foydalanuvchi!</h2>
          <p className="user-balans">Balans: 25 000 so'm</p>
          <div className="ticket-cards">
            <div className="tickets-onse">
              <p className="dashboard-onse-text">Sizda 3 ta birmartalik chipta bor</p>
            </div>
            <div className="tickets-motnly"></div>
            <div className="tickets-all"></div>
          </div>
          <div className="dashboard-btn-box">
            <Link className="dashboard-btn" to="/tickets"><button>Chipta olish</button></Link>
            <Link className="dashboard-btn" to="/qr"><button>QR Kod ko‘rish</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
