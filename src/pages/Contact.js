import React from "react";
import ContactNav from "../components/ContactNav";
import { MdMailOutline } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <body className="contact-bg">
      <ContactNav />
      <div className="d-flex justify-content-center center">
        <div className="contact-info center">
          <h1>Reach out!</h1>
          <div className="d-flex flex-column">
            <div className="d-flex gap-3 align-items-center mr-2">
              <MdMailOutline size={40} />
              <a href="mailto:susiemarsdev@gmail.com" className="contact-links">
                susiemarsdev@gmail.com
              </a>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <DiGithubBadge size={40} />
              <a href="https://github.com/Susie-Mars" className="contact-links">
                Github
              </a>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <FaLinkedin size={37} />
              <a
                href="https://www.linkedin.com/in/susie-mars/"
                className="contact-links"
              >
                LinkedIn
              </a>
            </div>
            <div className="d-flex gap-4 align-items-center mt-1 ml-2">
              <BsTelephone size={32} />
              <p className="ml-3">303-666-3276</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;
