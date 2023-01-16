import React from "react";

const Activity = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-4 rounded-lg custom-shadow">
        <h2 className="text-xl font-medium text-[#FF8500]">05</h2>
        <span className="text-xs font-medium text-gray-500">
          Total Accounts
        </span>
      </div>
      <div className="p-4 rounded-lg custom-shadow">
        <h2 className="text-xl font-medium text-[#FF8500]">02</h2>
        <span className="text-xs font-medium text-gray-500">
          Total Savings Accounts
        </span>
      </div>
      <div className="p-4 rounded-lg custom-shadow">
        <h2 className="text-xl font-medium text-[#FF8500]">03</h2>
        <span className="text-xs font-medium text-gray-500">Total Cards</span>
      </div>
      <div className="p-4 rounded-lg custom-shadow">
        <h2 className="text-xl font-medium text-[#19A526]">07</h2>
        <span className="text-xs font-medium text-gray-500">
          Total Insurances
        </span>
      </div>
    </div>
  );
};

export default Activity;
