import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page2.css";

export default function Page2() {
  const [wallet, setWallet] = useState(1000);
  const [betAmount, setBetAmount] = useState("");
  const [message, setMessage] = useState("");
  const [diceImage, setDiceImage] = useState("Dice1.jpeg");
  const [score, setScore] = useState(0);
  const [lossCount, setLossCount] = useState(0);
   
  const navigate = useNavigate();


  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const handleBet = (selectedNum) => {
    const bet = parseInt(betAmount);

    if (isNaN(bet)) {
      alert("Please enter a valid amount.");
      return;
    }

    if (bet > wallet) {
      alert("Insufficient balance in wallet.");
      return;
    }

    if (bet > 1000) {
      alert("Sorry, this is a lot of amount!");
      return;
    }

    if (selectedNum < 1 || selectedNum > 6) {
      alert("Oo sorry, you can only select numbers from 1 to 6.");
      return;
    }

    const diceRoll = rollDice();
    setDiceImage(`Dice${diceRoll}.jpeg`);

    if (selectedNum === diceRoll) {
      const winAmount = Math.floor(bet * 0.9);
      setWallet(wallet + winAmount);
      setScore(score + winAmount);
      setMessage(`🎉 You Win! Dice: ${diceRoll}`);
      setLossCount(0);

    } else {
      setWallet(wallet - bet);
      const newLossCount = lossCount + 1;
      setLossCount(newLossCount);
      setMessage(`😞 You Lose! Dice: ${diceRoll}`);
      if (newLossCount == 3) {
         alert("🚨 You have lost 3 times in a row! Take a break or try a smaller bet!");
       }
       
    }
    
  };
  

  const handleInputChange = (e) => {
    setBetAmount(e.target.value);
  };

  const resetGame = () => {
    setWallet(1000);
    setScore(0);
    setBetAmount("");
    setDiceImage("Dice6.jpeg");
    setMessage("");
  };

  const showRules = () => {
    alert(`
      🎲 Dice Game Rules:
      - Select a number (1 to 6) using the top buttons.
      - Enter your bet amount.
      - If the dice matches your number, you win 90% of your bet.
      - If not, you lose the bet.
      - Wallet starts with 1000.
    `);
  };

  return (
    <div className="div1">
      <div className="div2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button className="btn" key={num} onClick={() => handleBet(num)}>
            {num}
          </button>
        ))}
      </div>

      <div className="div3">
        <h1>$ {wallet}</h1>
      </div>


      <div className="div4">
        <h2>Total Score</h2>
        <h2>Select Number</h2>
      </div>

      <div className="div5">
        <div className="img">
          <img src={diceImage} alt="dice" />
        </div>

        <div className="inpt">
          <input
            type="number"
            value={betAmount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>

        <div className="select">
           <p style={{ color: message.includes("Win") ? "green" : message.includes("Lose") ? "red" : "white" }}>
              {message || " "}

           </p>
           
        </div>


        <div className="roll">
          <button id="reset" onClick={resetGame}>Reset Score</button>
        </div>

        <div className="show">
          <button id="show" onClick={showRules}>Show Rules</button>
        </div>
       </div>
      <button id="back" onClick={() => navigate("/")} >  ⬅ Go Back
      </button>

    </div>
  );
}
