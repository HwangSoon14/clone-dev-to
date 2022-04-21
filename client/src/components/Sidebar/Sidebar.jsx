import React from "react";
<<<<<<< HEAD
=======
import Slogan from "../Slogan/Slogan";
import TabList from "../Tab/TabList";
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4

const Sidebar = (props) => {
  return (
    <div
<<<<<<< HEAD
      className={`top-0 left-0 w-[320px] bg-white px-4 py-6 drop-shadow-lg text-black fixed h-full z-40  ease-in-out duration-300 ${
=======
      className={`top-0 left-0 w-[320px] bg-white border-r-[2px] border-gray-300 px-4 py-6 drop-shadow-lg text-black fixed h-full z-40  ease-in-out duration-300 ${
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
        props.showSidebar ? "translate-x-0 " : "translate-x-[-100%]"
      }`}
    >

      {/* X close button / */}
      <div className="absolute right-[10px] top-[20px]">
        <button onClick={() => props.setShowSidebar(false)}>
          <svg
            className="w-6 h-6  text-black "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div className="pb-4 text-[18px]  font-bold">
          <h3 className="">DEV Community</h3>
<<<<<<< HEAD
=======
          <div>
            <Slogan />
            <TabList />
          </div>
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
      </div>
    </div>
  );
};

export default Sidebar;
