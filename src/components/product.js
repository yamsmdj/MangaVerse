import React from 'react';

const product = ({product}) => {
    return (
      <div>
        <div className=" w-52">
          <img
            src={`img/manga/${product.oeuvres.name.replace(/\s+/g, "")}/${
              product.picture
            }`}
            alt={product.name}
            className=" h-52"
          />
          <h2>{product.name}</h2>
          <h2>{product.prix}</h2>
          <h2>{product.oeuvres.name}</h2>
          <h2>{product.created_at}</h2>
        </div>
      </div>
    );
};
// ${oeuvre.name.replace((/\s+/g, ""))}
export default product;
