import React from 'react';

const OeuvresAdmin = ({ oeuvre }) => {
    return (
        <div className=' w-full py-1 bg-blackOP30 mt-1 '>
            <ul className='grid grid-cols-1 text-white'>
                <li className="text-center">{oeuvre.name}</li>
            </ul>
        </div>
    );
};

export default OeuvresAdmin;