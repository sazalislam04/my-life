import React from "react";
import shape1 from "../../../assets/others/Ellipse 523.png";
import shape2 from "../../../assets/others/Vector 7.png";

const Subscribe = () => {
  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#19A526] h-96 text-center py-28 relative">
      <div>
        <h2 className="text-white text-4xl mb-2">Get In Touch</h2>
        <p className="text-white">
          Subscribe us for new offerings and travle packages.
        </p>
        <form onSubmit={handleSubmit} className="py-6">
          <input
            className="px-6 h-[48px] w-80 rounded-tl-full focus:outline-none text-sm rounded-bl-full"
            type="email"
            placeholder="Your email"
          />
          <input
            className="px-5 h-[48px] text-white cursor-pointer bg-[#FF8500] rounded-tr-full rounded-br-full"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
      <div className="absolute top-40 -left-32">
        <img src={shape1} alt="" />
      </div>
      <div className="absolute z-10 left-20">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default Subscribe;
