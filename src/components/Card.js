import Solo from "../assets/img/manga/Solo Leveling/SoloLeveling-T1.jpg";

const Card = () => {
  return (
    <div>
      <div className=" flex flex-col items-center py-1">
        <img src={Solo} alt="" className=" border w-52" />
        <h2>Titre</h2>
      </div>
    </div>
  );
};

export default Card;
