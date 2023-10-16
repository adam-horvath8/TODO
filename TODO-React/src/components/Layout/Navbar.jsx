import NavButton from "../reusable/NavButton";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center bg-indigo-300 p-5 lg:min-h-[90vh]">
      <NavButton label="Inbox" to="inbox" />
      <NavButton label="Projects" to="projects" />
      <NavButton label="Today" to="today" />
      <NavButton label="Week" to="week" />
    </nav>
  );
};

export default Navbar;
