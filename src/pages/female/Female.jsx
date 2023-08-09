import React from "react";
import "./female.css";
import { Link } from "react-router-dom";

const Female = () => {
  return (
    <div className="female_section">
      <h1>Happy Womens Day</h1>
      <p>You are loved and appreciated</p>
      <Link className="home_btn" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default Female;
