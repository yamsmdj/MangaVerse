import React from "react";
import Logo from '../assets/Logo.svg'

const Formulaire = () => {
  return (
    <div className="p-8">
      <div className="w-3/4 mx-auto bg-gray-700 rounded-lg ">
        <div className=" flex flex-col items-center">
          <img src={Logo} alt="" className="w-16 h-16 ml-5 mt-5"/>
          <h2 className="text-2xl">Formulaire de contact</h2>
        </div>
        <div className="md:flex ">
          <div className="w-full p-4 flex flex-col justify-around">
            <div className="flex my-2">
              <div className=" w-1/2 pr-2">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  className=" py-3 text-center w-full bg-gray-800 rounded  text-gray-100  "
                />
              </div>
              <div className=" w-1/2 pl-2">
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Prenom"
                  className=" py-3 text-center w-full bg-gray-800 rounded  text-gray-100 "
                />
              </div>
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className=" py-3 text-center w-full bg-gray-800 rounded  text-gray-100 "
              />
            </div>
            <div className=" mt-4">
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="Telephone"
                className=" py-3 text-center w-full bg-gray-800 rounded  text-gray-100 "
              />
            </div>
            <div className=" mt-4">
              <input
                type="text"
                id="sujet"
                name="sujet"
                placeholder="Sujet"
                className="  py-3 text-center w-full bg-gray-800 rounded  text-gray-100 "
              />
            </div>
          </div>
          <div className="w-full p-4">
            <div className="">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className=" text-center w-full bg-gray-800 rounded  h-64 text-gray-100 py-1 px-3 "
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 py-7">
          <div className="">
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Envoyer
            </button>
          </div>
          <div className="">
            <button className="text-blue-300  border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;

/* 
<form>
  <div className="flex flex-col justify-center">
    <div className="flex justify-center items-center">
      <div className="mx-4">
        <div className="my-2">
          <input type="text" name="nom" placeholder="Nom" />
          <input type="text" name="prenom" placeholder="Prenom" />
        </div>
        <div className="">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="my-2">
          <input type="text" name="telephone" placeholder="Telephone" />
        </div>
      </div>
      <div className="">
        <input type="text" name="objet" className="py-10" placeholder="objet" />
      </div>
    </div>
    <div className="">
      <button type="submit" className=" bg-blue-500 rounded p-2">Envoyer</button>
    </div>
  </div>
</form> 
*/
