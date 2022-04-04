/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
  return (
    <div className="nav flex place-content-around items-center h-20 w-full invisible md:visible">
      <h1 className="header text-4xl font-bold">MCnB</h1>
      <div className="links text-lg">
        <ul className="flex gap-16">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
