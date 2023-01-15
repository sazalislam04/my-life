import React from "react";
import company1 from "../../../assets/others/1611945612000 (2).png";
import company5 from "../../../assets/others/logo_banque_postfinance (1).png";
import company2 from "../../../assets/others/mirabad (2).png";
import company4 from "../../../assets/others/Pictet_logo(1) (2).png";
import company3 from "../../../assets/others/UBS_Logo_Semibold (1).png";

const Banks = () => {
  return (
    <section className="bg-[#FFF4E7] h-64 flex items-center justify-center">
      <div>
        <h2 className="text-[#19A526] text-2xl text-center font-medium">
          Our Remunerative <span className="text-[#FF8500]">Banks</span>
        </h2>
        <div className="mt-6 flex items-center gap-10">
          <img className="w-10" src={company1} alt="" />
          <img className="w-32" src={company2} alt="" />
          <img className="w-16" src={company3} alt="" />
          <img className="w-28" src={company4} alt="" />
          <img className="w-24" src={company5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banks;
