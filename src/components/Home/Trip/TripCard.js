import React from "react";

const TripCard = ({ trip }) => {
  const { img, title, duration } = trip;

  return (
    <div className="bg-white custom-shadow rounded-lg ">
      <div className="relative overflow-hidden">
        <div className="rounded-lg">
          <img className="rounded-tl-lg rounded-tr-lg" src={img} alt="" />
        </div>
        <div className="py-4 px-5 text-sm text-gray-600">
          <h2 className="text-lg font-medium text-[#19A526]">{title}</h2>
          <p className="text-xs">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
