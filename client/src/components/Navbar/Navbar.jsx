import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assest/logo.png";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <>
      <div className="mx-auto top-0 left-0 right-0 drop-shadow-sm p-2 max-w-screen-2xl bg-white border-b-2 border-gray-200 md:px-8 lg:px-28 ">
        <div className="w-full h-full flex items-center container">
          {/* menu-button */}
          <div className="flex items-center justify-center md:hidden">
            <button onClick={handleToggleSidebar}>
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* logo */}
          <div className="w-[50px] h-[40px] ml-3">
            <Link to="/">
              <img
                className="w-full h-full object-cover rounded-[10px]"
                src={Logo}
                alt="logo dev"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center ml-auto mr-2 md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <div className="hidden md:block ml-3 relative">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <input
              id="search-field"
              name="search"
              type="text"
              autoComplete="text"
              className="appearance-none min-w-[370px] rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Search..."
            />

            <div className="absolute right-[10px] top-[50%] translate-y-[-50%] z-20 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="hidden md:block md:ml-auto mr-8">
                <Link to="/sign-in">
                <button className="secondary-btn">Log in</button>
                </Link>
          </div>

          <div className="">
            <Link to="/sign-up">
              <button className="main-btn">Create account</button>
            </Link>
          </div>

          
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Navbar;
