import React from 'react';
import { NavLink } from "react-router-dom";
import Update from "../assets/update.svg";
import Delete from "../assets/delete.svg";

const PanelAdmin = ({ product }) => {
    return (
        <div className='w-10/12 mb-1 py-1 bg-blackOP30'>
            <ul className='grid grid-cols-8 text-white'>
                <li className="text-center">{product.categorie?.name || '-'}</li>
                <li className="text-center">{product.oeuvres?.name || '-'}</li>
                <li className="text-center">{product.name}</li>
                <li className="text-center">{product.type?.name || '-'}</li>
                <li className="text-center">{product.oeuvres?.rating || '-'}/10</li>
                <li className="text-center">{product.prix}€</li>
                <li className="text-center flex justify-center">
                    <NavLink to={`/dashboard/update/${product.id}`} className="svg-container">
                        <img src={Update} alt="boutique" className='w-8' />
                    </NavLink>
                </li>
                <li className="text-center flex justify-center">
                    <NavLink to={`/dashboard/delete/${product.id}`} className="svg-container">
                        <img src={Delete} alt="boutique" className='w-6' />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default PanelAdmin;
