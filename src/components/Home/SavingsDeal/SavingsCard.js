import React from "react";
import shape1 from "../../../assets/others/Ellipse 523.png";
import shape2 from "../../../assets/others/Ellipse 526 (1).png";

const SavingsCard = ({ saving }) => {
  const { img, amtsign, text_1, text_2, text_3, value_1, value_2, value_3 } =
    saving;

  return (
    <div className="bg-white custom-shadow rounded-lg ">
      <div className="p-6 relative overflow-hidden">
        <div className="image-container">
          <img className="h-12" src={img} alt="" />
        </div>
        <div className="flex mt-8 justify-between text-sm text-gray-600">
          <p>{text_1}:</p>
          <p className="font-medium text-gray-900">{value_1}</p>
          <img className="h-4 object-cover" src={amtsign} alt="" />
        </div>
        <div className="flex py-1 justify-between text-sm text-gray-600">
          <p>{text_2}:</p>
          <p className="font-medium text-gray-900">{value_2}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>{text_3}:</p>
          <p className="font-medium text-gray-900">{value_3}</p>
        </div>
        <div className="mt-6">
          <button className="px-8 py-2 rounded-full text-[#19A526] border border-[#19A526]">
            Explore
          </button>
        </div>
        <div className="-bottom-12 absolute -right-6 ">
          <img className="w-32 " src={shape2} alt="" />
        </div>
        <div className="absolute top-52 right-16">
          <img className="w-20" src={shape1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SavingsCard;
