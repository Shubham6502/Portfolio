import React from "react";
import aboutPic from "../assets/about.png"; 
import networkBg from "../assets/background.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="w-full relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden"
    >
     
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{ backgroundImage: `url(${networkBg})` }}
      ></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
           
            <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-20 rounded-full"></div>

            <img
              src={aboutPic}
              alt="Shubham About"
              className="relative w-60 md:w-72 object-cover rounded-xl
                         mask-image-[linear-gradient(to_bottom,white_85%,transparent)]"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="w-full md:w-2/3 text-gray-300 space-y-6 text-base leading-relaxed">

          <h2 className="text-3xl font-bold mb-2">
            <span className="text-purple-400">About</span> Me
          </h2>

          <p>
            I’m <span className="text-white font-semibold">Shubham Patil</span>, a passionate  
            <span className="text-purple-400 font-semibold"> Software Engineer</span> and  
            <span className="text-purple-400 font-semibold"> Full-Stack Developer</span>  
            who loves building clean, efficient, and user-centric digital products.
          </p>

          <p>
            My work revolves around modern technologies like  
            <span className="text-white font-semibold"> React.js, Node.js, Express.js, Java, MongoDB,</span>  
            and <span className="text-white font-semibold">MySQL</span>.  
            I believe in writing code that is maintainable, scalable, and meaningful.
          </p>

          <p>
            Along with development, I am constantly improving my  
            <span className="text-purple-400 font-semibold"> problem-solving and DSA skills</span>  
            to prepare for software engineering roles in top companies.
          </p>

          {/* Education Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Education</h3>

            <ul className="space-y-3">
              <li>
                <span className="text-white font-semibold">MCA</span> —  
                D.Y. Patil School of MCA, Pune (2024–2026)
              </li>
              <li>
                <span className="text-white font-semibold">B.Sc Computer Science</span> —  
                Vivekanand College, Kolhapur (CGPA: 9.03/10)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
