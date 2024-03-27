import axios from "axios";
import React, { useEffect, useState } from "react";
import PanelAdmin from "../components/PanelAdmin";

const Dashboard = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        // setProduct(res.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des produits : ",
          error
        );
      });
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center items-center bg-bleuDark">
      <div className="w-full h-96 bg-bgAdmin bg-no-repeat bg-cover bg-center">
        <h1>Produits</h1>
      </div>
      <div className=" bg-slate-600 w-1/2 flex flex-col justify-center items-center my-20 text-white">
        <h1 className=" font-bold">Liste des produits</h1>
        <div className=" bg-blue-950 w-10/12 mt-20 mb-1 py-1">
          <ul className=" grid grid-cols-7  text-center">
            <li>Categorie</li>
            <li>Nom</li>
            <li>Type</li>
            <li>Note</li>
            <li>Prix</li>
            <li>Update</li>
            <li>Delete</li>
          </ul>
        </div>
        {products ? (
          products.map((product, index) => (
            <PanelAdmin product={product} key={index} />
          ))
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
