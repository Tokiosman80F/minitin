import image1 from "../../../assets/images/toys/car-6.jpg";
import image2 from "../../../assets/images/toys/superhero-1.jpg";
import image3 from "../../../assets/images/toys/lego-4.jpg";
import DealCard from "./DealCard";

const HotDeal = () => {
  const dealCardInfo = [
    { img: image1, title: "Sport Car", mainPrice: "499", discoutPrice: "50" },
    { img: image2, title: "Robo Toy", mainPrice: "800", discoutPrice: "72" },
    { img: image3, title: "Penginue", mainPrice: "300", discoutPrice: "27" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2  justify-between items-center">
      {dealCardInfo.map((info, index) => (
        <DealCard key={index} info={info}></DealCard>
      ))}
    </div>
  );
};

export default HotDeal;
