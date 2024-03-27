import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/product";
import { useParams } from "react-router-dom";

const MonProduit = () => {
  const [products, setProduct] = useState([]);
  const { id } = useParams();
  const filterProduct = products.filter(product => product.oeuvre?.id === parseInt(id))

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        // setProduits(res.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des produits : ",
          error
        );
      });
  }, []);


  return (
    <div className="bg-bleuDark text-white">
      <h1>{products.name}</h1>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <div className="flex flex-wrap w-1/2 m-auto gap-9 ">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MonProduit;