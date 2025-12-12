import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 w-full flex justify-between items-center px-6 md:px-10 py-4 md:py-6 z-20">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg md:text-xl">Shubham</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-300 text-base">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-80 text-gray-300 flex flex-col items-center gap-6 py-6 z-10 transition-all">
          <a href="#about" className="hover:text-white" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" className="hover:text-white" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-white" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-white" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
