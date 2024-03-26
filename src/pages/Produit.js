import { useState, useEffect } from "react";
import axios from "axios";


const Produit = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/oeuvres")
      .then((res) => {
        setProduits(res.data);
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
console.log("tatoataota :::",  produits);
  return (
    <div>
      <h1>Produits</h1>
      <div className="flex ">
        {produits ? (
          produits.map((produit) => (
            <div key={produit.id}>
              <img src={require(`${produit.picture}`)} alt={produit.name} />
              <strong>{produit.name}</strong>
            </div>
          ))
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>
    </div>
  );
};

export default Produit;
