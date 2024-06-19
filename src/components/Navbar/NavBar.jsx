import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import "./Navbar.css"; // Tailwind CSS should be configured, additional custom CSS can be added if needed

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink exact to="/" className="text-white text-lg font-semibold">
          <span>CodeBucks</span>
          <span className="icon ml-2">
            <CodeIcon />
          </span>
        </NavLink>
        <div className="md:hidden" onClick={handleClick}>
          {click ? (
            <span className="icon text-white">
              <HamburgetMenuClose />
            </span>
          ) : (
            <span className="icon text-white">
              <HamburgetMenuOpen />
            </span>
          )}
        </div>
        <ul className={`${click ? "flex" : "hidden"} md:flex space-x-4`}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="text-white bg-gray-700"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="text-white bg-gray-700"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="text-white bg-gray-700"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="text-white bg-gray-700"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
