import React from "react";
import { Link } from "react-router-dom";
import "./male.css";

const Male = () => {
  return (
    <div className="male_section">
      <Link className="home_btn" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default Male;
