import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildA text={text} setText={setText} />
      <p>Parent Text:{text}</p>
      <ChildB text={text} setText={setText} />
    </>
  );
}

export default App;
