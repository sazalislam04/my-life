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
    <footer class="bg-[#404040] py-28">
      <div class="container p-6 mx-auto">
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6">
              <div>
                <p class="text-2xl text-white font-bold">Need Help With</p>
                <p className="text-[#19A526] text-2xl font-bold py-1">
                  Anything?
                </p>
              </div>

              <p class="max-w-sm mt-2 text-gray-50">
                We are have to support you!
              </p>

              <div class="mt-6">
                <button className="bg-[#FF8500] px-8 py-3 text-white rounded-full">
                  Contact Us
                </button>
              </div>
              <div className="mt-[85px]">
                <img className="h-16" src={logo} alt="" />
              </div>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <did>
                <h3 class="text-gray-400 relative">Banking</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link class="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Add new account
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  My account
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  My savings
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Add new cards
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  My cards
                </Link>
              </did>
              <did>
                <h3 class="text-gray-400 relative">Insurance</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link class="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Home insurance
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Mobility insurance
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Travel insurance
                </Link>
              </did>
              <did>
                <h3 class="text-gray-400 relative">Traveling</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link class="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  Add new booking
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  My booking
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Plan & roots
                </Link>
              </did>
              <did>
                <h3 class="text-gray-400 relative">More</h3>
                <span className="w-32 mt-0.5 absolute h-0.5 bg-gray-600 "></span>
                <Link class="block my-4 mt-8 text-sm text-gray-300 hover:underline">
                  About us
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Send email
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Blog
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  FAQ
                </Link>
                <Link class="block my-4 text-sm text-gray-300 hover:underline">
                  Service policy
                </Link>
              </did>
            </div>
            <div className="mt-10 flex items-center gap-6">
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
