import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      TotalExpense: 100,
      TotalRevenue: 200,
      amt: 2400,
    },
    {
      name: "Feb",
      TotalExpense: 200,
      TotalRevenue: 400,
      amt: 2210,
    },
    {
      name: "Mar",
      TotalExpense: 800,
      TotalRevenue: 600,
      amt: 2290,
    },
    {
      name: "Apr",
      TotalExpense: 1880,
      TotalRevenue: 1108,
      amt: 2000,
    },
    {
      name: "May",
      TotalExpense: 1690,
      TotalRevenue: 1900,
      amt: 2181,
    },
    {
      name: "Jun",
      TotalExpense: 2090,
      TotalRevenue: 2800,
      amt: 2500,
    },
    {
      name: "Jul",
      TotalExpense: 2490,
      TotalRevenue: 3200,
      amt: 2100,
    },
    {
      name: "Aug",
      TotalExpense: 3090,
      TotalRevenue: 2800,
      amt: 2200,
    },
    {
      name: "Sep",
      TotalExpense: 3490,
      TotalRevenue: 3000,
      amt: 2400,
    },
    {
      name: "Oct",
      TotalExpense: 3490,
      TotalRevenue: 3800,
      amt: 2800,
    },
    {
      name: "Nov",
      TotalExpense: 3390,
      TotalRevenue: 4300,
      amt: 1900,
    },
    {
      name: "Dec",
      TotalExpense: 3490,
      TotalRevenue: 3800,
      amt: 1800,
    },
  ];

  return (
    <div className="p-4">
      <LineChart width={560} height={300} data={data}>
        <CartesianGrid strokeDasharray="1 2" />
        <XAxis
          strokeDasharray="1 2"
          style={{ fontSize: "14px" }}
          stroke="#d1d5db"
          dataKey="name"
        />
        <YAxis strokeDasharray="1 2" stroke="#d1d5db" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalRevenue" stroke="#19A526" />
        <Line type="monotone" dataKey="TotalExpense" stroke="#FF8500" />
      </LineChart>
    </div>
  );
};

export default Chart;
