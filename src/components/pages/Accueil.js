import Card from "../Card";
import Carousel from "../Carousel";
import OpT1 from "../../assets/img/manga/OnePiece/Op-T1.jpg";
import OpT2 from "../../assets/img/manga/OnePiece/Op-T2.jpg";
import OpT3 from "../../assets/img/manga/OnePiece/Op-T3.jpg";
import OpT4 from "../../assets/img/manga/OnePiece/Op-T4.jpg";
import OpT5 from "../../assets/img/manga/OnePiece/Op-T5.jpg";
import OpT6 from "../../assets/img/manga/OnePiece/Op-T6.jpg";

const Accueil = () => {
  const images = [OpT1, OpT2, OpT3, OpT4, OpT5, OpT6];
  return (
    <div>
      <div className="bg-bgAccueil bg-no-repeat bg-cover bg-center">
        <h1 className="flex justify-center uppercase cielText font-black text-3xl text-center py-8">Commencer une nouvelle serie</h1>
        <div className="flex justify-evenly pb-8">
          <Carousel images={images}/>
        </div>
      </div>
      <div className="flex bg-blue-950 h-96 ">
        <div className="bg-white bg-opacity-10">
          <p className="text-opacity-100 text-white">
            Depuis 2009, nous vous proposons d'acheter des mangas d'occasions ou de vendre les votres sur
            MangasVerse.
            Venez découvrir ou retrouver des milliers de mangas d'occasions en très bon état et aux meilleurs prix
            (réduction pouvant aller jusqu'à -80%)! Alors n'hésitez plus et commandez dès maintenant vos mangas en
            intégrale ou complétez vos collections grâce à nos mangas à l'unité ou en pack !
            Si les mangas que vous recherchez ne sont plus en stock, vous pouvez mettre une alerte pour être averti dès
            réapprovisionnement.
            Vous souhaitez vous séparer de vos anciens mangas. SpiritofManga.com peut vous les racheter, ... CASH !
            N'attendez plus pour envoyer votre liste de mangas en remplissant le formulaire "Rachat de mangas".   
            ALERTE INFO 
            • Suite à la refonte du site Spiritofmanga, vous devez utiliser votre EMAIL pour vous connecter à la place de votre
            pseudo. Votre mot de passe reste inchangé.
          </p>
        </div>
        <div className="">
          <h3>Acheter des mangas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            natus consequatur molestiae quisquam, cupiditate quidem molestias
            similique libero necessitatibus eius nostrum, totam numquam. Ab quam
            incidunt ducimus totam inventore dolores.
          </p>
        </div>
      </div>
      <div className=" bg-blue-500">
        <h1 className="">LES PLUS POPULAIRES</h1>
        <Card />
      </div>
    </div>
  );
};

export default Accueil;
