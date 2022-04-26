import React from "react";
import { useSelector } from "react-redux";
import Slogan from "../Slogan/Slogan";
import TabList from "./TabList";
const Tab = () => {
  
  const user = useSelector(state => state.auth.current_user);


  return (
    <div className="hidden md:block w-full md:w-[30%] lg:w-[20%] md:p-1 lg:p-2">
      {Object.keys(user).length <= 0 &&    <Slogan />} 
  
      <TabList />
      
    </div>
  );
};

export default Tab;
