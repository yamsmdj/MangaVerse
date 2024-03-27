import React from 'react';

const PanelAdmin = () => {
    return (
        <div className=' bg-slate-600 w-1/2 flex justify-center'>
            <div className=' bg-indigo-950 w-full'>
                <ul className=' list-none flex w-full justify-between text-white'>
                    <li>Produits</li>
                    <li>Nom</li>
                    <li>Type</li>
                    <li>Rating</li>
                    <li>Prix</li>
                    <li>Update</li>
                    <li>Delete</li>
                </ul>
            </div>
        </div>
    );
};

export default PanelAdmin;