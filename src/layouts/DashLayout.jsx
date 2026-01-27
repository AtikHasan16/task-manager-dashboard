import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <aside>
        <Sidebar></Sidebar>
      </aside>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default DashLayout;
