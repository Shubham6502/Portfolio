import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
   <>
   <div className="absolute top-0 w-full flex justify-between items-center px-6 md:px-10 py-4 md:py-6 text-sm md:text-base font-medium z-20">
        <div className="text-white font-bold text-lg md:text-xl">Shubham</div>
        <div className="flex gap-6 md:gap-10 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
   </>
  )
};

export default Navbar;
