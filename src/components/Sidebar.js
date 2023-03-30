import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.show.isSidebarOpen);
  return (
    showSidebar && (
      <div className="Sidebar p-4 shadow-lg bg-white w-60 mt-2">
        <div className="primary-info">
          <p>Home</p>
          <p>Shorts</p>
          <p>Subscriptions</p>
        </div>
        <div className="line h-[2px] rounded bg-black my-2"></div>
        <div className="secondary-info">
          <p>Library</p>
          <p>History</p>
          <p>Your Videos</p>
          <p>Watch Later</p>
          <p>liked videos</p>
        </div>
      </div>
    )
  );
};

export default Sidebar;
