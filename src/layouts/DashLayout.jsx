import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashLayout = () => {
  return (
    <>
      <div className="flex">
        <header className="order-1 flex-1">
          <Navbar></Navbar>
        </header>
        <aside className="">
          <Sidebar></Sidebar>
        </aside>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default DashLayout;
