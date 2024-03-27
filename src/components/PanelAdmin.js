import React from 'react';

const PanelAdmin = ({ product }) => {
    return (
        <div className='bg-indigo-950 w-10/12 mb-1 py-1'>
            <ul className='list-none flex w-full justify-evenly text-white text-sm'>
                <li className="text-center">{product.categorie?.name}</li>
                <li className="text-center">{product.oeuvres?.name}</li>
                <li className="text-center">{product.type?.name}</li>
                <li className="text-center">{product.oeuvres?.rating}/10</li>
                <li className="text-center">{product.prix}€</li>
                <li className="text-center">Update</li>
                <li className="text-center">Delete</li>
            </ul>
        </div>
    );
};


export default PanelAdmin;