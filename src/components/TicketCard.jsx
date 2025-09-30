import React from "react";

function TicketCard({ title, price, onBuy }) {
  return (
    <div className="ticketscard">
      <h3 className="tiketscard-title">{title}</h3>
      <p className="tickets-price">{price} so'm</p>
      <button className="ticket-buy" onClick={onBuy}>Sotib olish</button>
    </div>
  );
}

export default TicketCard;
