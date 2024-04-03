import axios from "axios";
import React, { useState, useEffect } from "react";
import NavAdmin from "../components/wrapper/NavAdmin";
import { useParams } from "react-router-dom";

const UpdateAdmin = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [prix, setPrix] = useState("");
    const [quantiter, setQuantiter] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
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

    const handleValidation = () => {
        axios.patch(`http://localhost:8000/api/products/${id}`, {
            name: name,
            prix: prix,
            quantiter: quantiter
        })
            .then((res) => {
                console.log("Mise à jour réussie !");
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour : ", error);
            });
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
                            <div className="w-10/12 flex flex-col justify-center items-center">
                                <form>
                                    <div className="bg-blackOP30 w-full">
                                        <input type="text" name="name" defaultValue={selectedProduct.oeuvres?.name} placeholder="Oeuvres :" className="bg-transparent w-full" />
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
                                                <input type="text" name="name" defaultValue={selectedProduct.name} className="bg-transparent w-full " />
                                            </div>
                                            <div className="bg-blackOP30 my-1 text-center">
                                                <input type="value" name="prix" defaultValue={selectedProduct.prix} className="bg-transparent w-full" />
                                            </div>
                                            <div className="bg-blackOP30 my-1">
                                                <input type="value" name="quantiter" defaultValue={selectedProduct.quantiter} className="bg-transparent w-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-1/2 flex justify-between mt-5">
                                        <button type="button" className=" bg-red-700 rounded-md px-10 py-2 ">Annuler</button>
                                        <button type="button" className=" bg-green-700 rounded-md px-10 py-2" onClick={handleValidation}>Valider</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAdmin;
