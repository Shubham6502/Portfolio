import React from "react";
import { FaLinkedin, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";
import profileImg from "../assets/profile.png"; 
import networkBg from "../assets/background.jpg"; 

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#05050A] text-white relative overflow-hidden">

        {/* <div
              className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
              style={{ backgroundImage: `url(${networkBg})` }}
            ></div> */}
      

      
      <div className="w-full h-full flex  flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-16 md:mt-0">

        {/* LEFT TEXT */}
        <div className="md:w-1/4 text-center md:text-left mt-12 md:mt-0">
          <p className="text-purple-400 text-lg mb-2 font-medium">Hello, I'm</p>
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            PATIL <br /> SHUBHAM
          </h1>

          {/* SOCIAL ICONS */}
          <div className="flex  justify-center  text-xl md:justify-start md:flex-col md:text-2xl gap-6 mt-8 text-gray-100">
            <a href="https://linkedin.com/in/shubhampatil20" target="_blank" aria-label="LinkedIn" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="https://github.com/Shubham6502" target="_blank" aria-label="GitHub" className="hover:text-purple-400"><FaGithub /></a>
            
            
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="md:w-2/4  relative flex  justify-center mt-12 md:mt-0">
        
          <div className="absolute top-0 w-64 h-64 md:w-80 md:h-80 bg-purple-700 rounded-full opacity-40 blur-[100px] -translate-y-1/4 z-0"></div>

          
          <div className="relative flex justify-center w-64 h-64 md:w-90 md:h-90">
            <img
              src={profileImg}
              alt="Shubham Patil"
            className="object-cover rounded-t-xl w-60 h-60 xl:w-90 xl:h-90"
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%)",
  }}
            />
          </div>
        </div>

      
        <div className="md:w-1/4 text-center md:text-left mt-12 md:mt-0 flex flex-col justify-center">
          <p className="text-purple-300 font-semibold mb-2 text-lg">MCA Student</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-200 mb-4">
            Software Engineer <br /> & Full-Stack Developer
          </h2>

        

          
          <a
            href="https://drive.google.com/file/d/19CZLsVWyC2llvNZDRl8I-552vlbzMZ0W/view?usp=sharing"
            // href="https://drive.google.com/file/d/19CZLsVWyC2llvNZDRl8I-552vlbzMZ0W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 text-sm tracking-widest text-gray-300 border border-gray-500 rounded hover:text-purple-400 hover:border-purple-400 transition"
          >
            RESUME →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
