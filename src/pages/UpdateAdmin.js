import axios from "axios";
import React, { useState, useEffect } from "react";
import NavAdmin from "../components/wrapper/NavAdmin";
import { useParams } from "react-router-dom";

const UpdateAdmin = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // Ajout de l'état pour la catégorie sélectionnée
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error(
                    "Une erreur s'est produite lors de la récupération des produits : ",
                    error
                );
            });
        axios
            .get(`http://localhost:8000/api/categorie`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories : ",
                    error
                );
            });
    }, []);

    useEffect(() => {
        const filtered = products.filter(
            (product) => product.id === parseInt(id)
        );
        setFilteredProducts(filtered);
    }, [id, products]);

    const selectedProduct = filteredProducts.find(
        (product) => product.id === parseInt(id)
    );

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="w-full flex flex-row bg-bleuDark">
            <NavAdmin />
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full h-96 bg-bgAdmin bg-no-repeat bg-cover bg-center">
                    <h1 className="flex h-full justify-center items-center text-white">Produits</h1>
                </div>
                <div className="bg-white bg-opacity-10 w-1/2 flex justify-center items-center my-20 text-white">
                    <div className="w-full flex flex-col justify-center items-center my-10">
                        {selectedProduct && (
                            <div className="w-10/12">
                                <div className="bg-blackOP30">
                                    <input type="text" defaultValue={selectedProduct.oeuvres?.name} placeholder="Oeuvres :" className="bg-transparent w-full" />
                                </div>
                                <div id="oui" className="flex flex-row w-full justify-between">
                                    <img
                                        src={`/img/manga/${selectedProduct?.oeuvres?.name.replace(
                                            /\s+/g,
                                            ""
                                        )}/${selectedProduct?.picture}`}
                                        alt="One piece"
                                        className="h-48 mt-1"
                                    />
                                    <div className="w-full ms-1 flex flex-col justify-between text-center">
                                        <div className="bg-blackOP30 my-1 text-center">
                                            <input type="text" defaultValue={selectedProduct.name} placeholder="Nom :" className="bg-transparent w-full " />
                                        </div>
                                        <div className="bg-blackOP30 my-1 text-center">
                                            <input type="text" defaultValue={selectedProduct.prix} placeholder="Prix :" className="bg-transparent w-full" />
                                        </div>
                                        <div className="bg-blackOP30 my-1">
                                            <input type="text" defaultValue={selectedProduct.quantiter} placeholder="Quantité :" className="bg-transparent w-full" />
                                        </div>
                                        <div className="bg-blackOP30 flex flex-row">
                                            <select value={selectedCategory} onChange={handleCategoryChange} className=" bg-transparent ">
                                                <option value="" className="bg-transparent">Sélectionnez une catégorie</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.name}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <input type="text" placeholder="Type :" className="bg-transparent w-2/3  my-1" />
                                        </div>
                                        <div className="bg-blackOP30 my-1">
                                            <input type="text" placeholder="Genre :" className="bg-transparent w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UpdateAdmin;
