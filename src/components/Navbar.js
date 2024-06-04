import React from "react";
import logo from "../asset/assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav
      className="mb-20 flex item-center
        justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-4 text-2xl m-8 ">
        <FaGithub />
        <FaLinkedin />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
