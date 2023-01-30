import React from "react";
import { Link } from "react-router-dom";

const ProjNavbar = () => {
  return (
    <nav className="navbar">
      <div className="d-flex gap-2">
        <h1 className="navbar-header">
          <a href="/" className="nav-title-link">
            Red<span className="nav-three-span">Planet</span>Dev
          </a>
        </h1>
      </div>
      <div className="nav-three-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default ProjNavbar;
