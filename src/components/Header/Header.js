import React, { useState } from "react";
import { Link } from "react-router-dom";
import insurance from "../../assets/icons/Menu Icon (1).png";
import travel from "../../assets/icons/Menu Icon (2).png";
import profile from "../../assets/icons/Menu Icon (3).png";
import bank from "../../assets/icons/Menu Icon.png";
import search from "../../assets/icons/Other Icons.png";
import logo from "../../assets/logo/Logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-8 relative ">
      <nav className="container relative flex z-50 lg:sticky items-center justify-between">
        <Link to="/" className="text-[#19A526] font-semibold text-xl">
          <img className="h-10" src={logo} alt="" />
        </Link>
        <ul className="md:flex hidden items-center text-[#006838] font-medium">
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
            className="border rounded-full py-1 px-6 text-sm focus:outline-none"
          />
          <img className="h-5 absolute right-2" src={search} alt="" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {/* mobile nav */}

        {open && (
          <ul className="items-center transition duration-200 bg-gray-100  rounded-lg p-5 absolute mt-56 z-10 right-0 w-64 overflow-hidden text-[#006838] font-medium">
            <li className="my-2 text-[#006838]">
              <Link className="flex items-center gap-2">
                <img className="h-6" src={bank} alt="" /> <span>Banking</span>
              </Link>
            </li>
            <li className="my-2">
              <Link className="flex items-center gap-2">
                <img className="h-6" src={insurance} alt="" />{" "}
                <span>Insurance</span>
              </Link>
            </li>
            <li className="my-2">
              <Link className="flex items-center gap-2">
                <img className="h-6" src={travel} alt="" /> <span>Travel</span>
              </Link>
            </li>
            <li className="my-2">
              <Link className="flex items-center gap-2">
                <img className="h-6" src={profile} alt="" />{" "}
                <span>My Profile</span>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
