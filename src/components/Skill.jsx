import React from "react";
import networkBg from "../assets/background.jpg";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import reactLogo from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import c from "../assets/skills/c.png";
import cpp from "../assets/skills/cpp.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode.png";
import postman from "../assets/skills/postman.png";
import tailwindlogo from "../assets/skills/tailwind.png"

const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: reactLogo },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongo },
    { name: "MySQL", icon: mysql },
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "C", icon: c },
    { name: "C++", icon: cpp },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "VS Code", icon: vscode },
    { name: "Postman", icon: postman },
    {name:"Tailwind" , icon: tailwindlogo},
  ];

  return (
    <section
      id="skills"
      className="w-full relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{ backgroundImage: `url(${networkBg})` }}
      ></div>

    
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-purple-700 blur-[200px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
       
        <h2 className="text-3xl text-center font-bold mb-16">
          <span className="text-purple-400">My</span> Skills
        </h2>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white/5 border border-purple-700/20 backdrop-blur-md group-hover:scale-105 transition duration-200 shadow-md">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              </div>
              <p className="mt-3 text-sm text-gray-300 group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
