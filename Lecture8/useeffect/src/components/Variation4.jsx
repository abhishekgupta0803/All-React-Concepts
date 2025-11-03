import React, { useEffect, useState } from "react";

const Variation4 = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //4 Multiple Dependencies
  useEffect(() => {
    alert("Runs every time when count,total  is updated ");
  }, [count,total]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count </button>
      <br />
      <br />
      <p>{total}</p>
      <button onClick={() => setTotal(total + 1)}>update Total</button>
    </div>
  );
};

export default Variation4;
