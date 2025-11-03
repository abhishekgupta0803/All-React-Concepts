import React, { useEffect, useState } from "react";

const Variation5 = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //5 Add a clean-up function
  useEffect(() => {
    alert("count is updated ");
    return ()=>{
        alert("count is unmount from UI")
    }
  }, [count]);
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

export default Variation5;
