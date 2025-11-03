import ChildB from "./components/ChildB";
import { createContext, useState } from "react";
import "./App.css";

const User = createContext();

function App() {
  const [user, setUser] = useState({ name: "Love", salary: 25000 });

  return (
    <>
      <User.Provider value={user}>
        <ChildB />
      </User.Provider>
    </>
  );
}

export default App;
export { User };
