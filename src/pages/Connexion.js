import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Connexion = () => {
  return (
    <div className="bg-bgTest">
      <div className="">
        <div className=" bg-blue-500 text-red-600 ">
          <img className="" src={Logo} alt="logo" />
          <h1>Connexion</h1>
          <div className="">
            <input type="email" placeholder="Email" />
          </div>
          <div className="">
            <input type="text" placeholder="Password" />
          </div>
          <button type="submit" className=" rounded text-white bg-blue-500">
            se connecter
          </button>
          <NavLink to="">
            {" "}
            Vous n'avez pas encore de compte ? <strong>Inscrivez-vous</strong>
          </NavLink>
          <NavLink to=""> Retour</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
