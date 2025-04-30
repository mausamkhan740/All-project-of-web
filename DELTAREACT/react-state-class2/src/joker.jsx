import { useState } from "react";

export default function Joker(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke]=useState({});
    let  getNewJoke=async()=>{
        let response= await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    };
        return(
            <div>
                <h1>joker!</h1>
                <h2>{joke.setup}</h2>
                <h3>{joke.punchline}</h3>
                <button onClick={getNewJoke}>new joke</button>
            </div>
        )
    }

// export default function Joker() {
//     let URL = "https://official-joke-api.appspot.com/random_joke";

//     let getNewJoke = async () => {
//         let response = await fetch(URL);
//         let jsonResponse = await response.json();
//         console.log(jsonResponse);
//     };

//     return (
//         <div>
//             <h1>joker!</h1>
//             <button onClick={getNewJoke}>new joke</button>
//         </div>
//     );
// }
