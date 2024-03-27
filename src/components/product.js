import React from "react";

const product = ({ product }) => {
  return (
    <div>
      <div>
        <img
          src={`/img/manga/${product.oeuvres?.name.replace(/\s+/g, "").toLowerCase()}/${product.picture}`}
          alt={product.name}
          className=" h-64"
        />
        <p>{product.oeuvres?.name}</p>
        <p>{product.name}</p>
        <p> prix : {product.prix}</p>
        <p> Crée le : {product.created_at}</p>
        <button className=" rounded p-2 bg-blue-500">Ajouter au panier</button>
      </div>
    </div>
  );
};
export default product;

