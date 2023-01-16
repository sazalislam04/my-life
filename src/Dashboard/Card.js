import React from "react";
import shape2 from "../assets/others/Ellipse 529.png";
import shape3 from "../assets/others/Ellipse 530.png";
import shape1 from "../assets/others/Vector 565 (3).png";

import shape4 from "../assets/others/Vector 565 (4).png";

import shape5 from "../assets/others/Vector 565 (5).png";

const Card = () => {
  return (
    <div className="p-5">
      <h2 className="text-lg text-gray-500 font-medium capitalize">my card</h2>
      {/* john account */}
      <div className="bg-[#FFF3F7] relative text-[#986E6E] mt-8 rounded-tl-lg py-3 rounded-tr-lg p-2">
        <h2 className="font-medium">John</h2>
        <p className="text-xs">AC: 90876545123</p>
        <div className="absolute top-2 right-2">
          <img src={shape3} alt="" />
        </div>
        <div className="absolute top-2 right-4">
          <img src={shape2} alt="" />
        </div>
      </div>
      <div className="bg-[#FBE9EF] text-[#927F7F] rounded-bl-lg py-3 rounded-br-lg p-2">
        <div className="flex items-center gap-1">
          <img src={shape1} alt="" />
          <span>23,45000</span>
        </div>
        <p className="text-xs">Total balance</p>
      </div>
      {/* martha account */}
      <div className="bg-[#F3F8FF] relative text-[#6E7E98] mt-8 rounded-tl-lg py-3 rounded-tr-lg p-2">
        <h2 className="font-medium">Martha</h2>
        <p className="text-xs">AC: 90876545123</p>
        <div className="absolute top-2 right-2">
          <img src={shape3} alt="" />
        </div>
        <div className="absolute top-2 right-4">
          <img src={shape2} alt="" />
        </div>
      </div>
      <div className="bg-[#E9F1FB] text-[#6E7E98] rounded-bl-lg py-3 rounded-br-lg p-2">
        <div className="flex items-center gap-1">
          <img src={shape4} alt="" />
          <span>13,45000</span>
        </div>
        <p className="text-xs">Total balance</p>
      </div>
      {/* leo account */}
      <div className="bg-[#F7FFF3] relative text-[#8F986E] mt-8 rounded-tl-lg py-3 rounded-tr-lg p-2">
        <h2 className="font-medium">Leo</h2>
        <p className="text-xs">AC: 90876545123</p>
        <div className="absolute top-2 right-2">
          <img src={shape3} alt="" />
        </div>
        <div className="absolute top-2 right-4">
          <img src={shape2} alt="" />
        </div>
      </div>
      <div className="bg-[#F5FBE9] text-[#8F986E] rounded-bl-lg py-3 rounded-br-lg p-2">
        <div className="flex items-center gap-1">
          <img src={shape5} alt="" />
          <span>56,45000</span>
        </div>
        <p className="text-xs">Total balance</p>
      </div>
    </div>
  );
};

export default Card;
