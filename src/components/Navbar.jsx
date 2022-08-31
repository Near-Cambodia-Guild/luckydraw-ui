import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold flex"><img src={logo} alt='' className="w-8 h-8 mr-2" /> Lucky Draw</h1>
      <ul className="hidden md:flex">
        {/* <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/play" className="p-4">
            Play
          </Link>
        </li>
        <li className="p-4">
          <Link to="/contact" className="p-4">
            Contact
          </Link>
        </li>
        <li className="p-4">
          <Link to="/about" className="p-4">
            About
          </Link>
        </li> */}
      </ul>
      <div
        id="mobileOpenCloseBtns"
        onClick={handleNav}
        className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        id="mobileMenu"
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-8 ml-2">
        🎰 Lucky Draw
        </h1>
        <ul className="pt-18 uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/play">Play</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};