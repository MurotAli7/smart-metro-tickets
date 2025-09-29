import React from "react";

function TicketCard({ title, price, onBuy }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{price} so'm</p>
      <button onClick={onBuy}>Sotib olish</button>
    </div>
  );
}

export default TicketCard;
