import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col">
        <header>
          <Navbar />
        </header>
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
