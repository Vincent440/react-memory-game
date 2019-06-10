import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div onClick={() => props.clickedCharacter(props.id)} className="clickable img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
