import React from "react";
import PickMeals from "../Assets/f1.png";
import ChooseMeals from "../Assets/f2.png";
import DeliveryMeals from "../Assets/f3.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Reza Bukan rahardian",
      text: "Saya adalah seorang expert dibagian desain poster baik poster event,poster jualan UMKM, bahkan poster ucapan hari raya..",
    },
    {
      image: ChooseMeals,
      title: "Putri Rachma Yuliani",
      text: "Saya adalah seorang expert dibagian desain poster baik poster event,poster jualan UMKM, bahkan poster ucapan hari raya..",
    },
    {
      image: DeliveryMeals,
      title: "Ayo Waloyo",
      text: "Saya adalah seorang expert dibagian desain poster baik poster event,poster jualan UMKM, bahkan poster ucapan hari raya..",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-text-mentor">Mentor Yang Berpengalaman</h1>
        <p className="primary-text">
        Bersama para Top mentor di bidangnya, Kami membantu jutaan
        pengguna dan ratusan mitra dalam mengembangkan skill dan menyelesaikan
        maasalah mereka
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
