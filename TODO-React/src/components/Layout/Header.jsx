import React from "react";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-indigo-600 min-h-[10vh] p-5">
        <h1>Todoing</h1>
      </header>
      <main className="lg:flex ">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default Header;
