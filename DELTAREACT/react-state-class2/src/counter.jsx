import { useEffect, useState } from "react";

export default function counter(){
    let [count,setCount]=useState(0);
    let incCount=()=>{
        setCount((currCount)=>currCount+1);
    };
    useEffect((function printName(){
        console.log("this is the side effect of my knowladge");
    }),);
    return(
        <div>
            <h3>count={count}</h3>
            <button onClick={incCount}>increase</button>
        </div>
    )
}