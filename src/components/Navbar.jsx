import { Bell } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white bg-primary py-5 px-5 flex justify-between items-center">
      <div>
        <h1 className="text-3xl">Dashboard Overview</h1>
      </div>
      <div className="flex items-center gap-10">
        <Bell></Bell>
        <figure className="w-20 h-20 rounded-full overflow-hidden">
          <img src="/AvatarStyle6.png" alt="avatar Image" />
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
