import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import google from "../../assets/others/image 4.png";
import facebook from "../../assets/others/image 5.png";
import image from "../../assets/others/image_2.png";
import shape from "../../assets/others/Rectangle 393.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneInput, setPhoneInput] = useState();

  //   login handler
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="relative ">
          <div className="h-[100vh] lg:sticky top-0">
            <img src={shape} alt="" />
            <div className="absolute left-1/2 translate-x-[-50%] bottom-0">
              <img className="w-64" src={image} alt="" />
            </div>
          </div>
        </div>

        <div className="py-14">
          <h2 className="text-4xl text-gray-600 mb-10 font-medium">Sign Up</h2>
          <form onSubmit={handleLogin}>
            {/* email input */}
            <div>
              <label className="block my-2 text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                className="block py-[11px] px-4 w-full lg:w-9/12 focus:outline-none border focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300 rounded"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            {/* name input */}
            <div className="flex lg:w-9/12 w-full items-center gap-4 my-4">
              <div>
                <label className="block my-2 text-gray-600" htmlFor="fname">
                  First name
                </label>
                <input
                  className="block py-[11px] px-4 w-full focus:outline-none border focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300 rounded"
                  type="text"
                  name="fname"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label className="block my-2 text-gray-600" htmlFor="lname">
                  Last name
                </label>
                <input
                  className="block py-[11px] px-4 w-full focus:outline-none border focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300 rounded"
                  type="text"
                  name="lname"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            {/* phone input */}
            <div>
              <label className="block my-2 text-gray-600" htmlFor="phone">
                Phone
              </label>
              <PhoneInput
                country={"us"}
                value={phoneInput}
                onChange={setPhoneInput}
                inputStyle={{
                  width: "75%",
                  height: "49px",
                }}
                required
              />
            </div>
            {/* password input */}
            <div className="relative my-4">
              <label className="block my-2 text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="block  py-[11px] px-4 lg:w-9/12 focus:outline-none border focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300 rounded"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-44 mt-1 cursor-pointer"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className="flex gap-3 items-center my-6">
              <input
                type="checkbox"
                name="checkbox"
                className="h-5 w-5 rounded-md text-[#006838]"
              />
              <span className="text-sm text-gray-500">
                Yes, i'm agree with the
              </span>{" "}
              <span className="text-[#006838] font-medium text-sm">
                Terms of conditions
              </span>{" "}
              <span className="text-gray-500 text-sm">&</span>{" "}
              <span className="text-[#006838] text-sm font-medium">
                Service policy
              </span>
            </div>
            <div className="lg:w-9/12 w-full mt-4">
              <button className="bg-[#19A526] text-white font-medium w-full py-3 hover:bg-[#058b13] transition duration-300 rounded-full">
                Sign Up
              </button>
            </div>
          </form>
          {/* create new account */}
          <div className="my-8">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link className="text-[#006838] font-medium" to="/login">
                Log in
              </Link>
            </p>
          </div>
          {/* social login */}
          <div className="lg:w-9/12 w-full mt-2">
            <div className="flex justify-between gap-4 items-center">
              <button className="border flex items-center gap-2 rounded px-4 w-full py-[10px] focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300">
                <img className="h-8" src={facebook} alt="" />{" "}
                <span className="text-gray-500 text-sm">
                  Sign up with Facebook
                </span>
              </button>
              <button className="border flex items-center gap-2 rounded px-4 w-full py-[10px] focus:ring-2 focus:ring-gray-400 focus:border-gray-500 transition duration-300">
                <img src={google} alt="" />{" "}
                <span className="text-gray-500 text-sm">
                  Sign up with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
