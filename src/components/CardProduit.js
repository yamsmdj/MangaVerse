import React from "react";
import { NavLink } from "react-router-dom";

const CardProduit = ({ oeuvre }) => {
  return (
    <div className="w-52">
      <NavLink to={`/monproduit/${oeuvre.id}`}>
        <img
          src={`img/manga/${oeuvre.name.replace(/\s+/g, "").toLowerCase()}/${
            oeuvre.picture
          }`}
          alt={oeuvre.name}
          className=" h-52"
        />{" "}
      </NavLink>
      <p>
        <strong>{oeuvre.name}</strong>
      </p>
    </div>
  );
};
export default CardProduit;
