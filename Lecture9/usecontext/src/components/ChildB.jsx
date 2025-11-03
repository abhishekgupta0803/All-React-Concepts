import React, { useContext } from "react";
import { User } from "../App.jsx";

const ChildB = () => {
  const data = useContext(User);
  return (
    <div>
      <h3>Example of UseContext</h3>
      <p>{data.name} </p>
      <p>{data.salary}</p>
    </div>
  );
};

export default ChildB;
