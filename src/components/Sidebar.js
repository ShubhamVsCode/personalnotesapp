import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // h-screen may give problems
    <div className="col-span-2 p-5 border-r h-screen border-white/5">
      <div className="text-2xl text-orange">Shubham's Notes</div>
      <p>Projects</p>

      <Link to="/wondersoft">WonderSoft</Link>
    </div>
  );
};

export default Sidebar;
