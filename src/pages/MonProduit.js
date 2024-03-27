import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/product";
import { useParams } from "react-router-dom";

const MonProduit = () => {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => {
        setProduct(res.data);
        // console.log("all :" , res.data);
        // setProduits(res.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des produits : ",
          error
        );
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => product.oeuvres?.id === parseInt(id));
    setFilteredProducts(filtered);
    // console.log("filtre : " , filtered);
    // console.log("all : ");
  }, [id, products]);



  return (
    <div className="bg-bleuDark text-white">
      <h1>{products.name}</h1>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <div className="flex flex-wrap w-1/2 m-auto gap-9 ">
        {filteredProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MonProduit;