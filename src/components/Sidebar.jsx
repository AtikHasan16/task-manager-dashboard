import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { Calendar, Home, PhoneCall, Settings } from "lucide-react";

const Sidebar = () => {
  const menuStyle =
    "w-full flex p-2 justify-center lg:justify-start gap-2 items-center border-1 border-transparent rounded-md ";

  const links = (
    <>
      <li className="w-full">
        <NavLink className={menuStyle} to="/">
          <Home className="" />
          <span className="hidden lg:flex">Dashboard Overview</span>
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink className={menuStyle} to="/call-logs">
          <PhoneCall className="" />
          <span className="hidden lg:flex">Call Logs</span>
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink className={menuStyle} to="/appointments">
          <Calendar className="" />
          <span className="hidden lg:flex">Appointment</span>
        </NavLink>
      </li>
      <li className="w-full">
        <NavLink className={menuStyle} to="/settings">
          <Settings className="" />
          <span className="hidden lg:flex">Settings</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-primary h-screen p-2 px-4 w-full flex flex-col">
      <div>
        <div className="flex justify-center pt-10">
          <Logo />
        </div>
        <ul className="flex flex-col pt-18  gap-7 w-full font-medium">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
