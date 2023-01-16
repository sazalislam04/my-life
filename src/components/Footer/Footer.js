import React from "react";
import { Link } from "react-router-dom";
import instra from "../../assets/icons/ICONS (1).png";
import facebook from "../../assets/icons/ICONS (2).png";
import linkedin from "../../assets/icons/ICONS.png";
import youtube from "../../assets/icons/youtube.png";
import logo from "../../assets/logo/Logo.png";
import google from "../../assets/others/Frame 806.png";

const Footer = () => {
  return (
    <footer className="bg-[#404040] py-28">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <p className="text-2xl text-white font-bold">Need Help With</p>
                <p className="text-[#19A526] text-2xl font-bold py-1">
                  Anything?
                </p>
              </div>

              <p className="max-w-sm mt-2 text-gray-50">
                We are have to support you!
              </p>

              <div className="mt-6">
                <button className="bg-[#FF8500] px-8 py-3 text-white rounded-full">
                  Contact Us
                </button>
              </div>
              <div className="mt-[85px]">
                <img className="h-16" src={logo} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-400 relative">Banking</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link className="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Add new account
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  My account
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  My savings
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Add new cards
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  My cards
                </Link>
              </div>
              <div>
                <h3 className="text-gray-400 relative">Insurance</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link className="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Home insurance
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Mobility insurance
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Travel insurance
                </Link>
              </div>
              <div>
                <h3 className="text-gray-400 relative">Traveling</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link className="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Add new booking
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  My booking
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Plan & roots
                </Link>
              </div>
              <div>
                <h3 className="text-gray-400 relative">More</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link className="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  About us
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Send email
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Blog
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  FAQ
                </Link>
                <Link className="block my-4 text-sm text-gray-300 hover:underline">
                  Service policy
                </Link>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <img src={google} alt="" />
              <div className="flex items-center gap-6">
                <img src={facebook} alt="" />
                <img src={instra} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
