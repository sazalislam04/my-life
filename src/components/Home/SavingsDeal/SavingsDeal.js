import React from "react";
import { Link } from "react-router-dom";
import mirabaud from "../../../assets/others/mirabad (1).png";
import pictet from "../../../assets/others/Pictet_logo(1) (1).png";
import ubs from "../../../assets/others/UBS_Logo_Semibold (6).png";
import sign from "../../../assets/others/Vector 565.png";
import SavingsCard from "./SavingsCard";

const SavingsDeal = () => {
  const savingsInfo = [
    {
      id: 1,
      img: ubs,
      amtsign: sign,
      text_1: "Instalment amount",
      text_2: "Duration period",
      text_3: "Interest rate",
      value_1: "50 - 250",
      value_2: "1 - 10 years",
      value_3: "3.5 - 10 %",
    },
    {
      id: 2,
      img: pictet,
      amtsign: sign,
      text_1: "Instalment amount",
      text_2: "Duration period",
      text_3: "Interest rate",
      value_1: "50 - 250",
      value_2: "1 - 10 years",
      value_3: "3.5 - 10 %",
    },
    {
      id: 3,
      img: mirabaud,
      amtsign: sign,
      text_1: "Instalment amount",
      text_2: "Duration period",
      text_3: "Interest rate",
      value_1: "50 - 250",
      value_2: "1 - 10 years",
      value_3: "3.5 - 10 %",
    },
  ];

  return (
    <section className="mt-32 py-10">
      <div className="container">
        <div className="lg:w-[88%] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-[28px] text-gray-600 font-medium">
              Our Savings Deal
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
            {savingsInfo?.map((saving) => (
              <SavingsCard key={saving.id} saving={saving} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsDeal;
