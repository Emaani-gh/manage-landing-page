import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => (
  <nav className="container mx-auto p-6 ">
    <div className="flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="hidden md:flex space-x-6">
        <a className="hover:text-darkGrayishBlue" href="#">
          Pricing
        </a>
        <a className="hover:text-darkGrayishBlue" href="#">
          Product
        </a>
        <a className="hover:text-darkGrayishBlue" href="#">
          About Us
        </a>
        <a className="hover:text-darkGrayishBlue" href="#">
          Careers
        </a>
        <a className="hover:text-darkGrayishBlue" href="#">
          Community
        </a>
      </ul>
      <div className="cta">
        <a
          href="#"
          className="p-3 bg-brightRed text-white rounded-full 
        baseline pt-2 px-6 hover:bg-brightRedLight hidden md:block"
        >
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
