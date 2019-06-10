import React from "react";
import "./style.css";

function BootstrapDiv(props) {
  return (
    <div className="container">
      <div className="row no-gutters">
        {props.children}
      </div>
    </div>
  );
}

export default BootstrapDiv;
