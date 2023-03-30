import React from "react";
import user_logo from "../assets/user_logo.jpg";

const LiveComment = ({ name, comment }) => {
  return (
    <div className="flex space-x-2 mt-2 items-start ">
      <img src={user_logo} alt="user logo" className="h-6 rounded-full" />
      <div>
        <span className="text-slate-500">{name} </span>
        <span className="">{comment}</span>
      </div>
    </div>
  );
};

export default LiveComment;
