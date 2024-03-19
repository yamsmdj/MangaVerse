import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden burger-menu">
      <button
        className={`burger-icon ${isOpen ? "open" : ""} flex flex-col justify-between h-6 w-8`} onClick={toggleMenu}>
        <span className={`bg-white h-1 w-full transition-all duration-300 transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`bg-white h-1 w-full transition-all duration-300 transform ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`bg-white h-1 w-full transition-all duration-300 transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {isOpen && (
        <div className="menu-items flex flex-col absolute top-16 right-2 border rounded  p-3 gap-2 bg-white">
          <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>
            Accueil
          </NavLink>
          <NavLink to="/produits" activeClassName="active" onClick={toggleMenu}>
            Produits
          </NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;

