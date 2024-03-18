import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div className="menu-items">
          <NavLink to="/" exact activeClassName="active">Accueil</NavLink>
          <NavLink to="/produits" activeClassName="active">Produits</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
