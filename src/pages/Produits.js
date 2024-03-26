import { useState, useEffect } from "react";
import axios from "axios";
import CardProduit from "../components/CardProduit";


const Produits = () => {
  const [oeuvres, setOeuvres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/oeuvres")
      .then((res) => {
        setOeuvres(res.data);
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
      <h1>Produits</h1>
      <div className="flex ">
        {oeuvres ?
          oeuvres.map((oeuvre, index) => <CardProduit oeuvre={oeuvre} key={index} />)
         : (
          <p>Chargement en cours...</p>
        )}
      </div>
    </div>
  );
};

export default Produits;
