import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex justify-content-between  border-top border-dark mainFooter m-2 align-items-center">
        <h5 className="m-2">Cocktail Hour</h5>

        <p className="mt-2 p-2">
          Copyright &copy; {new Date().getFullYear()} Cocktail Hour
        </p>
      </footer>
    </div>
  );
};

export default Footer;
