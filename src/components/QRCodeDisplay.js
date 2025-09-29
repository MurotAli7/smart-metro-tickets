import React from "react";

function QRCodeDisplay() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sizning chipta QR kodingiz</h2>
      <div style={{ width: "200px", height: "200px", background: "#000", margin: "20px auto" }}>
        {/* QR kod generatorini keyin ulaymiz */}
      </div>
      <button>Amalda foydalanish</button>
    </div>
  );
}

export default QRCodeDisplay;
