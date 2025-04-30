import { useState } from "react";

export default function LotteryGame() {
  const [ticket, setTicket] = useState(null);
  const [isWinner, setIsWinner] = useState(false);

  const generateTicket = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const ticketStr = randomNum.toString().padStart(3, '0');
    const sum = ticketStr
      .split("")
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
    setTicket(ticketStr);
    setIsWinner(sum === 15);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎲 Lottery Game</h1>
      <button onClick={generateTicket}>Generate Lottery Ticket</button>

      {ticket && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Your Ticket: <span style={{ fontFamily: "monospace" }}>{ticket}</span></h2>
          {isWinner ? (
            <h3 style={{ color: "green" }}>🎉 Congratulations! You won the lottery!</h3>
          ) : (
            <h3 style={{ color: "red" }}>😢 Sorry, not a winning ticket.</h3>
          )}
        </div>
      )}
    </div>
  );
}
