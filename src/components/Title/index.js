import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav class="navbar navbar-light bg-light">
      <h1 className="title">{props.children}</h1>
  </nav>);
}

export default Title;
