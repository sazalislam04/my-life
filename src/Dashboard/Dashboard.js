import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/icons/Menu Icon (4).png";
import booking from "../assets/icons/Property 1=calendar.png";
import card from "../assets/icons/Property 1=Cards.png";
import credit from "../assets/icons/Property 1=credit-card.png";
import home from "../assets/icons/Property 1=home.png";
import mobility from "../assets/icons/Property 1=Mobility.png";
import travel from "../assets/icons/Property 1=Plane.png";
import savings from "../assets/icons/Property 1=Savings.png";
import Activity from "./Activity";
import Card from "./Card";
import InsuranceChart from "./InsuranceChart";
import OverviewChart from "./OverviewChart";

const Dashboard = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto md:flex gap-10 justify-between">
        <div className="flex flex-col rounded-lg w-full md:w-96 lg:w-64 bg-white custom-shadow">
          <div className="bg-[#F1FBF2] h-24 p-5 py-7">
            <div className="flex gap-1 items-center">
              <img
                className="object-cover w-12 h-12 mx-2 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <div className="">
                <h4 className="font-medium text-[#006838] text-lg">John Doe</h4>
                <p className="text-xs font-medium text-gray-500">
                  john@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-4 py-7">
            <nav>
              <Link className="flex items-center px-4 py-2 rounded-lg text-[#FF8500]">
                <img src={menu} alt="" />

                <span className="mx-4 font-medium">Dashboard</span>
              </Link>
              {/* banking */}
              <div className="tracking-widest px-4 text-gray-500 mt-7">
                Banking
              </div>
              <Link className="flex items-center px-4 py-2 mt-4 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={credit} alt="" />

                <span className="mx-4 font-medium">My Accounts</span>
              </Link>
              <Link className="flex items-center px-4 py-2 mt-1 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={savings} alt="" />

                <span className="mx-4 font-medium">My Savings</span>
              </Link>
              <Link className="flex items-center px-4 py-2 mt-1 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={card} alt="" />

                <span className="mx-4 font-medium">My Cards</span>
              </Link>
              {/* Insurance */}
              <div className="tracking-widest px-4 mt-5 text-gray-500 ">
                Insurance
              </div>
              <Link className="flex items-center px-4 py-2 mt-4 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={home} alt="" />

                <span className="mx-4 font-medium">My Home</span>
              </Link>
              <Link className="flex items-center px-4 py-2 mt-1 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={mobility} alt="" />

                <span className="mx-4 font-medium">My Mobility</span>
              </Link>
              <Link className="flex items-center px-4 py-2 mt-1 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={travel} alt="" />

                <span className="mx-4 font-medium">My Traveling</span>
              </Link>
              {/* travel */}
              <div className="tracking-widest px-4 mt-5 text-gray-500 ">
                Travel
              </div>
              <Link className="flex items-center px-4 py-2 mt-1 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                <img src={booking} alt="" />

                <span className="mx-4 font-medium">My Bookings</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0 lg:w-9/12">
          <div>
            <Activity />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            <div className="col-span-3">
              <div className="custom-shadow rounded-lg ">
                <h2 className="p-5 text-gray-500 font-medium px-6">
                  This Year Overview
                </h2>
                <OverviewChart />
              </div>
              <div className="custom-shadow rounded-lg mt-8">
                <h2 className="p-5 text-gray-500 font-medium px-6">
                  Insurance
                </h2>
                <InsuranceChart />
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 rounded-lg custom-shadow">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
