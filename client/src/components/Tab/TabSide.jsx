import React from "react";
import Slogan from "../Slogan/Slogan";
import TabList from "./TabList";
const Tab = () => {
  return (
    <div className="hidden md:block w-full md:w-[30%] lg:w-[26%] md:p-1 lg:p-2">
      <Slogan />
      <TabList />
      
    </div>
  );
};

export default Tab;
