
import './App.css'
import Page1 from "./page1";
import React from "react";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Page2 from "./page2"; 

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Page1/>
    },
    {
      path:"/Page2",
      element:<Page2/>
    },

  ]
);




function App() {


  return (
    <>
     <RouterProvider router={router}/>
        
    </>
  )
}

export default App
