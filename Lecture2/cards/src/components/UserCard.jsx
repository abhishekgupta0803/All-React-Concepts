import React from "react";
// import image from "../assets/abc.jpg";
import "../components/style.css";

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img src={props.image} alt="my-image" id="user-img" />
      <p id="user-desc">{props.desc} </p>
    </div>
  );
};

export default UserCard;
