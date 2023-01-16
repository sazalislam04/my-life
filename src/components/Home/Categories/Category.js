import React from "react";

const Category = ({ category }) => {
  const {
    img,
    heading,
    title_1,
    title_2,
    title_3,
    desc_1,
    desc_2,
    desc_3,
    icon_1,
    icon_2,
    icon_3,
  } = category;

  return (
    <div className="bg-white custom-shadow rounded-lg z-50">
      <img className="w-full" src={img} alt="" />
      <div className="p-8 text-lg">
        <h2 className="text-[#FF8500] tracking-wider uppercase">{heading}</h2>
        <div className="flex gap-1 items-center mt-3">
          <div>
            <img className="w-10" src={icon_1} alt="" />
          </div>
          <div className="p-3">
            <h3 className="text-sm text-[#006838] font-medium">{title_1}</h3>
            <p className="text-xs text-gray-500">{desc_1}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <img className="w-10" src={icon_2} alt="" />
          </div>
          <div className="p-3">
            <h3 className="text-sm text-[#006838] font-medium">{title_2}</h3>
            <p className="text-xs text-gray-500">{desc_2}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <img className="w-10" src={icon_3} alt="" />
          </div>
          <div className="p-3">
            <h3 className="text-sm text-[#006838] font-medium">{title_3}</h3>
            <p className="text-xs text-gray-500">{desc_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
