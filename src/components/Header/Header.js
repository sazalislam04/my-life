import React from "react";
import { Link } from "react-router-dom";
import insurance from "../../assets/icons/Menu Icon (1).png";
import travel from "../../assets/icons/Menu Icon (2).png";
import profile from "../../assets/icons/Menu Icon (3).png";
import bank from "../../assets/icons/Menu Icon.png";
import search from "../../assets/icons/Other Icons.png";
import logo from "../../assets/logo/Logo.png";

const Header = () => {
  return (
    <header className="py-8 relative">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="text-[#19A526] font-semibold text-xl">
          <img className="h-10" src={logo} alt="" />
        </Link>
        <ul className="flex items-center text-[#006838] font-medium">
          <li className="mx-5 text-[#006838]">
            <Link className="flex items-center gap-2">
              <img className="h-6" src={bank} alt="" /> <span>Banking</span>
            </Link>
          </li>
          <li className="mx-5">
            <Link className="flex items-center gap-2">
              <img className="h-6" src={insurance} alt="" />{" "}
              <span>Insurance</span>
            </Link>
          </li>
          <li className="mx-5">
            <Link className="flex items-center gap-2">
              <img className="h-6" src={travel} alt="" /> <span>Travel</span>
            </Link>
          </li>
          <li className="mx-5">
            <Link className="flex items-center gap-2">
              <img className="h-6" src={profile} alt="" />{" "}
              <span>My Profile</span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center relative">
          <input
            type="search"
            className="border rounded-full py-1 px-3 text-sm focus:outline-none"
          />
          <img className="h-5 absolute right-2" src={search} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
