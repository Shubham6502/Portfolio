import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#05050A] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

     
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-semibold">
            Shubham Patil
          </h3>
          <p className="text-sm mt-1">
            Software Engineer | Full-Stack Developer
          </p>
        </div>

     
        <div className="flex items-center gap-6 text-lg">
          <a
            href="mailto:shubhampatil6502@gmail.com"
            aria-label="Email"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/shubhampatil20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Shubham6502"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
        </div>

      
        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Shubham Patil. <br />
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
