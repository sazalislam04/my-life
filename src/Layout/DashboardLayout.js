import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <div className="shadow">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
