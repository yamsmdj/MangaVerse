import axios from "axios";
import React, { useEffect, useState } from "react";
import PanelAdmin from "../components/PanelAdmin";
import NavAdmin from "../components/wrapper/NavAdmin";
import OeuvresAdmin from "../components/OeuvresAdmin";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [oeuvres, setOeuvres] = useState([]);
    const [selectedOeuvre, setSelectedOeuvre] = useState(null);

    useEffect(() => {
        // Récupérer les produits
        axios
            .get(`http://localhost:8000/api/products`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de la récupération des produits : ", error);
            });

        // Récupérer les oeuvres
        axios
            .get(`http://localhost:8000/api/oeuvres`)
            .then((res) => {
                setOeuvres(res.data);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de la récupération des oeuvres : ", error);
            });
    }, []);

    const handleSelectOeuvre = (oeuvre) => {
        setSelectedOeuvre(oeuvre);
    };

    const filteredProducts = (() => {
        if (selectedOeuvre) {
            return products.filter((product) => product.oeuvres.id === selectedOeuvre.id);
        }
    })();




    return (
        <div className="w-full flex flex-row bg-bleuDark">
            <NavAdmin />
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full h-96 bg-bgAdmin bg-no-repeat bg-cover bg-center">
                    <h1 className="flex h-full justify-center items-center text-white">Produits</h1>
                </div>
                <div className="flex justify-between w-10/12">
                    <div className="bg-white h-fit bg-opacity-10 w-1/5 flex flex-col my-20  items-center">
                        <div className="bg-nav opacity-100 w-10/12 mt-10 mb-1 py-1 text-white text-center">Oeuvres</div>
                        <div className="w-full flex flex-col items-center mb-10">
                            {oeuvres ? (
                                oeuvres.map((oeuvre, index) => (
                                    <div key={index} onClick={() => handleSelectOeuvre(oeuvre)} className="cursor-pointer w-10/12">
                                        <OeuvresAdmin oeuvre={oeuvre} />
                                    </div>
                                ))
                            ) : (
                                <p>Chargement en cours...</p>
                            )}
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-10 w-3/4 flex flex-col justify-start items-center my-20 text-white">
                        <div className="bg-nav opacity-100 w-10/12 mt-10 mb-1 py-1">
                            <ul className="grid grid-cols-8 text-center">
                                <li>Categorie</li>
                                <li>Oeuvre</li>
                                <li>Nom</li>
                                <li>Type</li>
                                <li>Note</li>
                                <li>Prix</li>
                                <li>Update</li>
                                <li>Delete</li>
                            </ul>
                        </div>
                        {selectedOeuvre ? (
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <PanelAdmin product={product} key={index} />
                                ))
                            ) : (
                                <p>Aucun produit trouvé pour cette oeuvre.</p>
                            )
                        ) : (
                            <p>Sélectionnez une oeuvre pour filtrer les produits.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
