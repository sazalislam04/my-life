import React from "react";
import sign from "../assets/others/Vector 565 (1).png";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const InsuranceChart = () => {
  const data = [
    {
      name: "Home",
      uv: 1500,
      amt: 1500,
    },
    {
      name: "Mobility",
      uv: 1000,
      amt: 1210,
    },
    {
      name: "Travel",
      uv: 500,
      amt: 1190,
    },
  ];
  return (
    <div className="flex justify-between gap-4 p-4">
      <BarChart strokeDasharray="1 1" width={360} height={230} data={data}>
        <XAxis
          dataKey="name"
          style={{ fontSize: "14px" }}
          stroke="#d1d5db"
          tickMargin={10}
        />
        <YAxis stroke="#d1d5db" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#d1d5db" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            visibility: "hidden",
            backgroundColor: "transparent",
            borderRadius: 3,
            lineHeight: "20px",
            fontSize: "0px",
          }}
        />

        <CartesianGrid stroke="#d1d5db" strokeDasharray="1 1" />
        <Bar dataKey="uv" fill="#19A526" radius={30} barSize={14} />
      </BarChart>

      <div className="">
        <div className="rounded-md h-20 w-48 p-4 bg-[#F1FBF2]">
          <div className="text-[#19A526] flex items-center gap-1">
            <img src={sign} alt="" />
            <span>23,45,000</span>
          </div>
          <span className="text-xs font-medium text-gray-500">
            Total Insurance cost
          </span>
        </div>
        <div className="mt-5 rounded-md h-20 w-48 p-4 bg-[#FFF4E7] ">
          <div className="text-[#19A526] flex items-center gap-1">
            <img src={sign} alt="" />
            <span>23,45,000</span>
          </div>
          <span className="text-xs font-medium text-gray-500">
            Total Insurance cost
          </span>
        </div>
      </div>
    </div>
  );
};

export default InsuranceChart;
