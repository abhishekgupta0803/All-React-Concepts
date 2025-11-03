import React, { useEffect, useState } from "react";

const Variation3 = () => {
  const [count, setCount] = useState(0);

  //3 . that runs on Every time when count is updated
  useEffect(() => {
    alert("Runs every time when count is updated ");
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Variation3;
