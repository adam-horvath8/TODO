import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ label, to }) => {
  return (
    <NavLink to={to} className="p-5 min-w-full hover:bg-indigo-100 text-center">
      {label}
    </NavLink>
  );
};

export default NavButton;
