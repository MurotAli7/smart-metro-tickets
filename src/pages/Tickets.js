import React from "react";
import Navbar from "../components/navbar";
import TicketCard from "../components/TicketCard";

function Tickets() {
  const handleBuy = (ticket) => {
    alert(`${ticket} chipta sotib olindi!`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Chiptalar</h2>
        <TicketCard title="1 martalik chipta" price={2000} onBuy={() => handleBuy("1 martalik")} />
        <TicketCard title="10 martalik chipta" price={18000} onBuy={() => handleBuy("10 martalik")} />
        <TicketCard title="Oylik abonement" price={60000} onBuy={() => handleBuy("Oylik abonement")} />
      </div>
    </div>
  );
}

export default Tickets;
