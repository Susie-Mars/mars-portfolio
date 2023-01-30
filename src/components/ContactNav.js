import React from "react";
import { Link } from "react-router-dom";

const ContactNav = () => {
  return (
    <nav className="navbar">
      <div className="d-flex gap-2">
        <h1 className="navbar-header">
          <a href="/" className="nav-title-link">
            Red<span className="nav-four-span">Planet</span>Dev
          </a>
        </h1>
      </div>
      <div className="nav-four-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default ContactNav;
