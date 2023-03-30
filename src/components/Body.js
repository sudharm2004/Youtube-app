import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Videolist from "./Videolist";

const Body = () => {
  return (
    <div className="flex mt-24">
      <Sidebar />
      <Outlet />
      {/* <Videolist /> */}
    </div>
  );
};

export default Body;
