import { Power, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="bg-linear-to-b from-[#00FF88] to-[#00D4FF] p-3 rounded-xl text-black w-fit"
    >
      <Zap size={32}></Zap>
    </Link>
  );
};

export default Logo;
