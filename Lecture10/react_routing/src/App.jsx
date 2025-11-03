import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import About from "./components/About.jsx";
import Param from "./components/Param.jsx";


const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <div>
         <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
   {
   path: "/student/:id",
   element: (
     <div>
       <Navbar />
       <Param />
     </div>
   ),
 },
]);
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
