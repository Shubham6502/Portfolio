import React from "react";
import experienceImg from "../assets/working.png"; 
import networkBg from "../assets/background.jpg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
 
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${networkBg})` }}
      ></div>

      
      <div className="absolute -bottom-40 left-0 w-[450px] h-[450px] bg-purple-700 blur-[220px] opacity-25"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-16">
          <span className="text-purple-400">Work</span> Experience
        </h2>

       
        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">

          {/* LEFT — Image */}
          <div className="w-full md:w-1/3 flex justify-center hidden md:block ">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-20 rounded-full"></div>

              <img
                src={experienceImg}
                alt="Experience Visual"
                className="relative w-64 md:w-72 object-cover rounded-xl
                           mask-image-[linear-gradient(to_bottom,white_85%,transparent)]"
              />
            </div>
          </div>

        
          <div className="w-full md:w-2/3 text-gray-300 space-y-10 text-[15px] leading-relaxed">

            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                Junior Software Engineer Trainee
              </h3>
              <p className="text-gray-400">
                Codemind Technology Pvt Ltd · Pune  
                <span className="block text-gray-500 text-sm">Sep 2023 – Feb 2024</span>
              </p>

              <ul className="mt-4 space-y-2 list-disc ml-5">
                <li>Developed a Preschool Management System using React.js, Node.js, Express.js & MongoDB.</li>
                <li>Built modules like student enrollment, fee tracking & scheduling using REST APIs.</li>
                <li>Improved UI responsiveness & accessibility across all devices.</li>
                <li>Optimized MongoDB queries & applied MVC principles for performance and clarity.</li>
              </ul>
            </div>

           
            <div className="p-6 rounded-xl border border-purple-800/30 bg-purple-900/10 backdrop-blur-md">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                What I Gained From This Role
              </h4>
              <ul className="space-y-2 list-disc ml-5 text-gray-300">
                <li>Hands-on full-stack development experience.</li>
                <li>Understanding of real-world project structure and MVC patterns.</li>
                <li>Clear code writing and component-based UI development.</li>
                <li>Team collaboration and production-level development workflow.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
