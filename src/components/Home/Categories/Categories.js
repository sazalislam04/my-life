import React from "react";
import home from "../../../assets/icons/Frame 12 (1).png";
import save from "../../../assets/icons/Frame 12 (2).png";
import card from "../../../assets/icons/Frame 12.png";
import account from "../../../assets/icons/Frame 13 (1).png";
import mobility from "../../../assets/icons/Frame 13 (2).png";
import traveling from "../../../assets/icons/Frame 13.png";
import newbooking from "../../../assets/icons/Frame 14 (1).png";
import roots from "../../../assets/icons/Frame 14.png";
import shape6 from "../../../assets/others/Ellipse 521.png";
import shape1 from "../../../assets/others/Ellipse 522.png";
import shape2 from "../../../assets/others/Ellipse 523.png";
import shape3 from "../../../assets/others/Ellipse 524.png";
import insurance from "../../../assets/others/Frame 34 (1).png";
import travel from "../../../assets/others/Frame 34.png";
import banking from "../../../assets/others/Frame 36.png";
import shape4 from "../../../assets/others/Vector 7 (1).png";
import shape5 from "../../../assets/others/Vector 7.png";
import Category from "./Category";

const Categories = () => {
  const categoriesItem = [
    {
      id: 1,
      img: banking,
      heading: "Banking",
      title_1: "Add Account",
      title_2: "Saving",
      title_3: "Add Cards",
      desc_1: "Your multiple bank account",
      desc_2: "Explore saving plans",
      desc_3: "Personalize your cards",
      icon_1: card,
      icon_2: traveling,
      icon_3: roots,
    },
    {
      id: 2,
      img: insurance,
      heading: "Insurance",
      title_1: "Home",
      title_2: "Mobility",
      title_3: "Traveling",
      icon_1: home,
      icon_2: account,
      icon_3: newbooking,
      desc_1: "1 year - 25 years",
      desc_2: "3 months - 10 years",
      desc_3: "Day long - 6 months",
    },
    {
      id: 3,
      img: travel,
      heading: "Travel",
      title_1: "New Booking",
      title_2: "Plan & Roots",
      icon_1: mobility,
      icon_2: save,
      desc_1: "Book a new schedule",
      desc_2: "Explore all packages",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="lg:w-[88%] mx-auto pt-10">
            <div className="grid grid-cols-1 z-50 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesItem?.map((category) => (
                <Category key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute overflow-hidden right-0 -top-28">
          <img className="w-72 object-cover" src={shape1} alt="" />
          <div className="-bottom-6 right-10 absolute">
            <img className="w-60 object-cover" src={shape5} alt="" />
          </div>
        </div>
        <div className=" right-32 -mt-20 absolute">
          <img className="w-12 object-cover" src={shape6} alt="" />
        </div>
        <div className="absolute left-1/2 translate-x-[-1%, 20px] rotate-180 -mt-24">
          <img className="w-72 object-cover" src={shape5} alt="" />
        </div>
        <div className="absolute top-[350px] left-16">
          <img className="w-56 bottom-0" src={shape2} alt="" />
          <div className="absolute top-14 left-8 rotate-180">
            <img className="w-36 bottom-0" src={shape4} alt="" />
          </div>
        </div>
        <div className="absolute top-[510px]">
          <img className="w-20" src={shape3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Categories;
