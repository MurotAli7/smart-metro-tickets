import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#0078ff", color: "white" }}>
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>🏠 Home</Link>
      <Link to="/tickets" style={{ color: "white", textDecoration: "none" }}>🎫 Tickets</Link>
      <Link to="/payment" style={{ color: "white", textDecoration: "none" }}>💳 Payment</Link>
      <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>⚙️ Settings</Link>
    </nav>
  );
}

export default Navbar;
