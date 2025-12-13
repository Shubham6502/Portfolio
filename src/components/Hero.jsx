import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#05050A] text-white relative overflow-hidden">

      <div className="w-full flex flex-col md:flex-row items-center lg:h-screen md:px-16 mt-20 md:mt-0 bg-[#05050A] text-white relative overflow-hidden justify-between px-6 gap-16">

        {/* LEFT TEXT */}
        <div className="md:w-1/4 text-center md:text-left">
          <p className="text-purple-400 text-lg mb-2 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            PATIL <br /> SHUBHAM
          </h1>

          <div className="flex justify-center md:justify-start md:flex-col gap-6 mt-8 text-xl md:text-2xl">
            <a
              href="https://linkedin.com/in/shubhampatil20"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Shubham6502"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="md:w-2/4 relative flex justify-center">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-purple-700 rounded-full opacity-40 blur-[100px] -translate-y-1/4"></div>

          <img
            src={profileImg}
            alt="Shubham Patil"
            className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-t-xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="md:w-1/4 text-center md:text-left flex flex-col justify-center">
          <p className="text-purple-300 font-semibold mb-2 text-lg">
            MCA Student
          </p>

          {/* Typing Animation */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
            <span className="typing block">Software Engineer &</span>
            <span className="typing delay block">Full-Stack Developer</span>
          </h2>

          {/* Resume Button (mobile-safe) */}
          <a
            href="https://drive.google.com/file/d/19CZLsVWyC2llvNZDRl8I-552vlbzMZ0W/view"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block mt-6 px-6 py-2 text-sm tracking-widest
                       text-gray-300 border border-gray-500 rounded
                       hover:text-purple-400 hover:border-purple-400 transition"
          >
            RESUME →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
