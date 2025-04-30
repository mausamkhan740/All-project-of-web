import "./App.css";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

function App() {
  return(
    <div>
       <RouterProvider router={router} />;
    </div>
  )  
}
export default App;
