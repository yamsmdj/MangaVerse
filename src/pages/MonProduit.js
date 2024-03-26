import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/product";

const MonProduit = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/1")
      .then((res) => {
        setProduct(res.data);
    // setProduits(res.data["hydra:member"]);
    console.log(res);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des produits : ",
          error
        );
      });
  }, []);

    return (
      <div>
        <h1>Voici le produit </h1>
        <div className="flex">
            <Product product={product} />
        </div>
      </div>
    );
};

export default MonProduit;
