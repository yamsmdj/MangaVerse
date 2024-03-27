import React from 'react';
import { NavLink } from 'react-router-dom';

const PanelAdmin = ({ product }) => {
    return (
      <div className="bg-indigo-950 w-10/12 mb-1 py-1">
        <ul className="grid grid-cols-7 text-white">
          <li className="text-center">{product.categorie?.name}</li>
          <li className="text-center">{product.oeuvres?.name}</li>
          <li className="text-center">{product.type?.name}</li>
          <li className="text-center">{product.oeuvres?.rating}/10</li>
          <li className="text-center">{product.prix}€</li>
          <NavLink to="/">
            <li className="text-center">Update</li>
          </NavLink>
          <NavLink to="/">
            <li className="text-center">Delete</li>
          </NavLink>
        </ul>
      </div>
    );
};


export default PanelAdmin;