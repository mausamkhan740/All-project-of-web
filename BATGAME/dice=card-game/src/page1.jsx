import { useNavigate } from "react-router-dom";
import "./page1.css";
import React from "react";


export default function Page1(){
    
    const navigate=useNavigate();
    const gotoPage2=()=>{
        navigate("/Page2");
    };
    return(
        <div className="d1">
            <div className="d2">
              <img src="DiceAll.jpeg" alt="Dice" />
            </div>
            <div className="d3">
               
               <div className="d4">
                 <h1 id="h1">DICE GAME</h1>
                <button id="play" onClick={gotoPage2}>play now</button>
                </div>
            </div>
        </div>
    )
}