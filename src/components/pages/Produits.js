import { useState, useEffect } from "react";
import axios from "axios";
import Compteur from "../Compteur";

const Produits = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data);
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
      <h1>Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.prix} {product.quantiter}
          </li>
        ))}
      </ul>
      <Compteur />
    </div>
  );
};

  export default Produits;
