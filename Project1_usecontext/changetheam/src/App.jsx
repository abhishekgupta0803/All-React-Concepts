import ChildA from "./components/ChildA";
import { createContext, useState } from "react";
import "./App.css";
import './components/style.css'
const Theam = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Theam.Provider
        value={{ theme, setTheme }}
        
      >
        <div className="container" style={{ backgroundColor: theme === "light" ? "beige" : "blue" }}>
         <ChildA />
        </div>
       
      </Theam.Provider>
    </>
  );
}

export default App;
export { Theam };
