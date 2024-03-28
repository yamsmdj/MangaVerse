import axios from "axios";
import React, { useEffect, useState } from "react";
import PanelAdmin from "../components/PanelAdmin";
import NavAdmin from "../components/wrapper/NavAdmin";

const Dashboard = () => {
    const [oeuvres, setProduct] = useState([]);
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
        <div className="w-full flex flex-row bg-bleuDark">
            <NavAdmin />
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full h-96 bg-bgAdmin bg-no-repeat bg-cover bg-center">
                    <h1 className="flex h-full justify-center items-center text-white">Produits</h1>
                </div>
                <div className="bg-white bg-opacity-10 w-1/2 flex flex-col justify-center items-center my-20 text-white">
                    <div className=" bg-blackOP30 w-10/12 ">
                        <input type="text" className=" bg-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
