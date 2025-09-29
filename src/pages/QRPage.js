import React from "react";
import Navbar from "../components/navbar";
import QRCodeDisplay from "../components/QRCodeDisplay";

function QRPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <QRCodeDisplay />
      </div>
    </div>
  );
}

export default QRPage;
