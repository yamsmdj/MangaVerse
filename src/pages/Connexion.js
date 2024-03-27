import React from "react";
import { NavLink } from "react-router-dom";

const Connexion = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1>Connexion</h1>
          <div className="">
            <input type="email" />
          </div>
          <div className="">
            <input type="text" />
          </div>
          <button type="submit" />
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
