import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


import project1 from "../assets/projects/kolhapuri.jpg";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/jwellery.png";
import project4 from "../assets/projects/careerC.png";

const projects = [
  {
    title: "Kolhapuri Footware",
    image: project1,
    skills: ["HTML", "CSS", "JavaScript","PHP"],
    live: "",
    github: "",
  },
  {
    title: "Portfolio Website",
    image: project2,
    skills: ["ReactJs","Tailwind CSS"],
    live: "https://shubham6502.github.io/Portfolio/",
    github: "https://github.com/Shubham6502/Portfolio",
  },
  {
    title: "Jewellery Shop Web App",
    image: project3,
    skills: ["Python", "Mysql", "Flask"],
    live: "",
    github: "https://github.com/Shubham6502/Jwellery-Shop",
  },
   {
    title: "Career Compass",
    image: project4,
    skills: ["ReactJs", "MongoDB", "NodeJs","ExpressJs"],
    live: "",
    github: "https://github.com/Shubham6502/CareerCompas",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#05050A] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

 
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-purple-400">Projects</span>
        </h2>

     
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
             
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6">

                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

             
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-gray-500 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              
                <div className="flex gap-4">
                {project.live &&( <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border border-purple-400 rounded hover:bg-purple-400 hover:text-black transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>)}
                   { project.github &&(
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-400 rounded hover:border-white transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
