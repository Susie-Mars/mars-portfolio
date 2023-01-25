import React from "react";
import NavbarTwo from "../components/NavbarTwo";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <body className="error-bg">
      <NavbarTwo />
      <div className="d-flex justify-content-center text-light mt-5">
        <h1>
          You look lost, why don't you go{" "}
          <span>
            <Link to="/">Home</Link>
          </span>
        </h1>
      </div>
    </body>
  );
};

export default Error;
