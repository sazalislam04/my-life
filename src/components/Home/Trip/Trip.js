import React from "react";
import { Link } from "react-router-dom";
import shape3 from "../../../assets/others/Ellipse 521.png";
import shape1 from "../../../assets/others/Ellipse 526 (1).png";
import norway from "../../../assets/others/image 127.png";
import germany from "../../../assets/others/image 128.png";
import united from "../../../assets/others/image 129.png";
import shape2 from "../../../assets/others/Vector 7.png";
import TripCard from "./TripCard";

const Trip = () => {
  const tripCard = [
    {
      id: 1,
      img: germany,
      title: "Germany",
      duration: "15 days",
    },
    {
      id: 2,
      img: norway,
      title: "Norway",
      duration: "1 months",
    },
    {
      id: 3,
      img: united,
      title: "United States",
      duration: "10 days",
    },
  ];

  return (
    <section className="mt-16 py-10 relative">
      <div className="container">
        <div className="lg:w-[88%] w-full mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-[28px] text-gray-600 font-medium">
              Inspiration for your next trip
            </h2>
            <div className="flex items-center gap-4">
              <Link className="underline text-gray-700 text-sm font-medium">
                Show all
              </Link>
              <div className="flex items-center gap-3">
                <span className="w-8 cursor-pointer flex items-center justify-center h-8 rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span className="w-8 flex cursor-pointer items-center justify-center h-8 rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {tripCard?.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        <div className="bottom-0 right-0  overflow-hidden absolute  ">
          <img className="w-36 rotate-4" src={shape1} alt="" />
          <div className="absolute bottom-0  -right-10 -rotate-90">
            <img className="w-40" src={shape2} alt="" />
          </div>
        </div>
        <div className="absolute top-44 right-8">
          <img className="w-12" src={shape3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Trip;
