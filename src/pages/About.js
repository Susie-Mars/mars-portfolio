import React from "react";
import NavbarTwo from "../components/NavbarTwo";
import resume from "../images/susie.mars.resume.jan.2023.jpg";

const About = () => {
  return (
    <body className="about-bg">
      <NavbarTwo />
      <div className="d-flex justify-content-around m-2">
        <img src={resume} alt="resume" className="resume-image rounded"></img>
        <div className="about-info">
          <h1>About Me</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </div>
      </div>
    </body>
  );
};

export default About;
