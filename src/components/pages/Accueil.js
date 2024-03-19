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
    <div className="bg-bleuDark">
      <div className=" bg-bgAccueil bg-no-repeat bg-cover bg-center">
        <h1 className="flex justify-center uppercase cielText font-black text-3xl text-center py-8">
          Commencer une nouvelle serie
        </h1>
        <div className="flex justify-evenly p-8">
          <Carousel images={images} />
        </div>
        {/* <div className="lg:hidden">
          <Card />
        </div> */}
      </div>

      <div className="flex w-1/2 m-auto  py-16">
        <div className="bg-white text-white bg-opacity-10 p-6">
          <p>
            Depuis 2009, nous vous proposons
            <strong>
              d'acheter des mangas d'occasions ou de vendre les votres sur
              MangasVerse.
            </strong>
            Venez découvrir ou retrouver des milliers de mangas d'occasions en
            très bon état et aux meilleurs prix (réduction pouvant aller jusqu'à
            -80%)! Alors n'hésitez plus et commandez dès maintenant vos mangas
            en intégrale ou complétez vos collections grâce à nos mangas à
            l'unité ou en pack ! Si les mangas que vous recherchez ne sont plus
            en stock, vous pouvez mettre une alerte pour être averti dès
            réapprovisionnement. Vous souhaitez vous séparer de vos anciens
            mangas. SpiritofManga.com peut vous les racheter, ... CASH !
            N'attendez plus pour envoyer votre liste de mangas en remplissant le
            formulaire "Rachat de mangas".<strong>ALERTE INFO </strong> • Suite
            à la refonte du site Spiritofmanga, vous devez utiliser votre EMAIL
            pour vous connecter à la place de votre pseudo. Votre mot de passe
            reste inchangé.
          </p>
        </div>
        <div className=" text-white pl-6">
          <h2 className=" text-blue-300 text-center font-black">
            Acheter des mangas
          </h2>
          <ul className="mt-12 w-52">
            <li>Des milliers de mangas en vente 🛒</li>
            <li>Prix les plus bas 🎖️</li>
            <li>Achat simple et rapide ✅ </li>
            <li>Paiements sécurisés 🔒</li>
            <li>Service client rapide ⌛</li>
          </ul>
        </div>
      </div>
      <div className="bg-bgAccueil flex justify-evenly p-8">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Accueil;
