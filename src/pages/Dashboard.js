import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/product";
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
        // <div>
        //     {products ?
        //         products.map((product, index) => <Product product={product} key={index} />)
        //         : (
        //             <p>Chargement en cours...</p>
        //         )}
        // </div>
        <div className=" w-full flex justify-center">
            <PanelAdmin />
        </div>
    );
};

export default Dashboard;