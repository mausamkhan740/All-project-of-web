import { useState } from "react";
import "./lottary.css";
import { genTicket, sum } from "./lottary";

// ✅ Component name is properly capitalized
export default function Lottary() {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinning = sum(ticket) === 15;

  const generateNewTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div>
      <h1>🎰 Lottery Game</h1>

      {/* ✅ Clean layout with safety check */}
      <div className="ticket">
        {ticket.map((digit, index) => (
          <span key={index}>{digit}</span>
        ))}
      </div>

      <button onClick={generateNewTicket}>Generate New Ticket</button>

      <h3>
        {isWinning
          ? "🎉 Congratulations, you won the ticket!"
          : "❌ Better luck next time!"}
      </h3>
    </div>
  );
}
