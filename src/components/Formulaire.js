import React from "react";

const Formulaire = () => {
  return (
    <form>
      <input type="text" name="nom" placeholder="Nom" />
      <input type="text" name="prenom" placeholder="Prenom" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="telephone" placeholder="Telephone" />
      <input type="text" name="objet" placeholder="objet" />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Formulaire;
