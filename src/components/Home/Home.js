import React from "react";
import Categories from "./Categories/Categories";
import SavingsDeal from "./SavingsDeal/SavingsDeal";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Categories />
      <SavingsDeal />
      <Subscribe />
    </div>
  );
};

export default Home;
