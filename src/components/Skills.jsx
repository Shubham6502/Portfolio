import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB / MySQL", level: 78 },
       { name: "php", level: 65 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Python", level: 60 },
      { name: "C / C++", level: 72 },
      { name: "VS Code / Postman", level: 90 },
    ],
  },
];

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="My" accent="Skills" />
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCategory key={i} {...cat} animate={visible} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, animate, delay }) {
  return (
    <div
      className="bg-[#0c1a22] border border-[#1a3040] hover:border-[#00e5c0] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-mono text-xs text-[#00e5c0] tracking-[2px] mb-6">
        <span className="mr-1">#</span>
        {title.toUpperCase()}
      </div>
      <div className="flex flex-col gap-5">
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} animate={animate} delay={delay + i * 80} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill, animate, delay }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#c8d8e0] text-sm font-semibold">{skill.name}</span>
        <span className="font-mono text-xs text-[#00e5c0]">{skill.level}%</span>
      </div>
      <div className="h-0.5 bg-[#1a3040] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00e5c0] rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
