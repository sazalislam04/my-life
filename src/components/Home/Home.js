import React from "react";
import Banks from "./Banks/Banks";
import Categories from "./Categories/Categories";
import SavingsDeal from "./SavingsDeal/SavingsDeal";
import Subscribe from "./Subscribe/Subscribe";
import Trip from "./Trip/Trip";

const Home = () => {
  return (
    <div>
      <Categories />
      <SavingsDeal />
      <Subscribe />
      <Trip />
      <Banks />
    </div>
  );
};

export default Home;
