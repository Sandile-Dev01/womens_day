import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Button = ({ to, text, className }) => {
  return (
    <Link className={className} to={to}>
      {text}
    </Link>
  );
};

const Landing = () => {
  return (
    <section className="landing_section">
      <h1>What is your gender?</h1>

      <div className="buttons">
        <Button className="female_btn btn" to="/female" text="Female" />
        <Button className="male_btn btn" to="/male" text="Male" />
      </div>
    </section>
  );
};

export default Landing;
