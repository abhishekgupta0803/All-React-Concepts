import React, { useState } from "react";
import "../components/style.css";
const CountApp = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="card-component">
      <p>Counter is : {count}</p>
      <button id="btn" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

export default CountApp;
