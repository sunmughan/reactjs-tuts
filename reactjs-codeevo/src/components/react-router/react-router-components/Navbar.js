import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      {/* SIMPLE LINK COMPONENTS */}
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link> */}

      {/* NAVLINK COMPONENT WHICH KEEPS TRACK OF THE ACTIVE ROUTE */}
      {/* <NavLink end to={"/"}>
        Home
      </NavLink>
      <NavLink end to={"/about"}>
        About
      </NavLink> */}

      {/* NAVLINK COMPONENT WITH CSS IN JS STYLING */}
      <NavLink style={navLinkStyles} end to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} end to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} end to={"/products"}>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
