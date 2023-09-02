import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="Login">
      <button className="btn">Log in</button>
    </Link>
  );
}

export default Button;
