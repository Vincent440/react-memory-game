import React from "react";
import "./style.css";

function Navbar(props) {
  return (
  <div className="container">
    <nav className="navbar fixed-top black-bg text-white p-4">
      <span className="text-left display-4">React <span className="d-none d-md-inline">Memory </span>Game</span>
      <span className="navbar-text">{props.message}</span>
      <span className="badge badge-lg badge-info navbar-text">Score: {props.currentScore}</span>
      <span className="badge badge-lg badge-success navbar-text">Top Score: {props.topScore}</span>
    </nav>
  </div>);
}

export default Navbar;
