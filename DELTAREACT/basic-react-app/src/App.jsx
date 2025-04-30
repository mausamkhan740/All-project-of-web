// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./App.css";
// import Title from "./Title.jsx";
// import ProductTab from "./ProductTab.jsx";
// import Button from "./Button.jsx";
// import Msg from "./msg.jsx";
import Form from "./Form.jsx";

 
// function Title(){
  // return <h1>i am the Title</h1>
// }

function App() { 
  return (
    <>
     {/* <msg userName="mausam"textColor="pink"/> */}
     
     {/* <h2>Blockbaster Deals I shop Now</h2>
     <ProductTab/> */}

     {/* <Button/> */}

     <Form/>
    </>
      
  );
  


  // const [count, setCount] = useState(0)

  // return (
  //     <div>
  //       <h1>this is my app component</h1>
  //       <p>inside the app component we have:</p>
  //       <Title/>
  //       <Title/>
  //       <Title/>
  //     </div>
  // );
  
  //  (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )
}

export default App
