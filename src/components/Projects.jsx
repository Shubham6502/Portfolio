import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Career Compass",
    desc: " Built and deployed a full-stack platform with 12+ REST APIs supporting role-based authentication. Improved UI responsiveness across all devices. Optimised MongoDB queries & applied MVC principles.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Shubham6502/CareerCompas",
    live: "https://career-compas-tnoo.vercel.app/",
  },
  {
    title: "Jwellery Collection Website",
    desc: "Full-stack e-commerce style jewellery listing site with category filters, product detail pages, and a modern responsive design built with the Flask, Python, MySQL.",
    tags: ["Flask", "Python", "Mysql", "Javascript", "HTML", "CSS"],
    github: "https://github.com/Shubham6502/Jwellery-Shop",
    live: null,
  },
  {
    title: "Study Room Management System",
    desc: "A responsive web-based study room management system that allows users to check seat availability, reserve seats online, and contact the owner for bookings. Developed using HTML, CSS, JavaScript, PHP, and MySQL with a user-friendly interface and real-time reservation handling.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: null,
    live: null,
  },
  {
    title: "Kolhapuri Chappal – E-commerce Website",
    desc: "An e-commerce website for showcasing and selling traditional Kolhapuri Chappals. Built using HTML, CSS, JavaScript, PHP, and MySQL with product listings, category browsing, and a responsive user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: null,
    live: null,
  },
];

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="Featured" accent="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <div
      className="bg-[#0c1a22] border border-[#1a3040] hover:border-[#00e5c0] rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-white font-bold text-lg group-hover:text-[#00e5c0] transition-colors">
        {project.title}
      </h3>
      <p className="text-[#5a7a88] text-sm leading-relaxed flex-1">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#00e5c0]/8 border border-[#00e5c0]/20 text-[#00e5c0] text-[0.7rem] font-mono px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-5 mt-auto pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[#5a7a88] hover:text-[#00e5c0] text-xs font-semibold transition-colors"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[#5a7a88] hover:text-[#00e5c0] text-xs font-semibold transition-colors"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </div>
  );
}
