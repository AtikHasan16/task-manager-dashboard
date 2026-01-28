import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { Home, PhoneCall, Settings } from "lucide-react";

const Sidebar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-4">
          <Home></Home>{" "}
          <span className="hidden lg:flex">Dashboard Overview</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/call-logs" className="flex items-center gap-4">
          <PhoneCall></PhoneCall>{" "}
          <span className="hidden lg:flex">Call Logs</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" className="flex items-center gap-4">
          <Settings></Settings>
          <span className="hidden lg:flex">Settings</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-primary text-white h-screen p-2">
      <div className="flex justify-center pt-9">
        <Logo></Logo>
      </div>
      <div>
        <ul className="mt-18 flex flex-col items-center lg:items-start gap-7 font-medium p-2">{links}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
