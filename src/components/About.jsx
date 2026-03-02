import { useInView } from "../hooks/useInView";
import { Code2, Server, Database, Brain } from "lucide-react";

const statCards = [
  {
    icon: <Code2 className="text-[#00e5c0]" size={22} />,
    title: "Frontend",
    desc: "React.js · HTML · CSS · JavaScript · Tailwind CSS",
  },
  {
    icon: <Server className="text-[#00e5c0]" size={22} />,
    title: "Backend",
    desc: "Node.js · Express.js  · REST APIs",
  },
  {
    icon: <Database className="text-[#00e5c0]" size={22} />,
    title: "Database",
    desc: "MongoDB · MySQL ",
  },
  {
    icon: <Brain className="text-[#00e5c0]" size={22} />,
    title: "DSA",
    desc: "377+ Problems · LeetCode · HackerRank · GFG",
  },
];

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="About" accent="Me" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-[#c8d8e0] leading-relaxed mb-4 text-[0.95rem]">
              I'm{" "}
              <span className="text-[#00e5c0] font-semibold">Shubham Patil</span>, a
              passionate{" "}
              <span className="text-[#00e5c0] font-semibold">Software Engineer</span> and{" "}
              <span className="text-[#00e5c0] font-semibold">Full-Stack Developer</span> who
              loves building clean, efficient, and user-centric digital products.
            </p>
            <p className="text-[#c8d8e0] leading-relaxed mb-4 text-[0.95rem]">
              My core revolves around modern technologies like{" "}
              <span className="text-[#00e5c0] font-semibold">
                React.js, Node.js, Express.js, MongoDB
              </span>{" "}
              and <span className="text-[#00e5c0] font-semibold">MySQL</span>. I believe in
              writing code that is maintainable, scalable and meaningful.
            </p>
            <p className="text-[#c8d8e0] leading-relaxed mb-8 text-[0.95rem]">
              Along with development, I am constantly improving my{" "}
              <span className="text-[#00e5c0] font-semibold">
                problem-solving and DSA skills
              </span>{" "}
              to prepare for software engineering roles in top companies.
            </p>

            {/* Education */}
            <div>
              <p className="font-mono text-xs text-[#00e5c0] tracking-[3px] mb-4">
                // EDUCATION
              </p>
              <EduCard
                degree="MCA — Dr D.Y. Patil School of MCA, Pune"
                year="2024 – 2026"
                score="7.75 CGPA"
              />
              <EduCard
                degree="B.Sc. Computer Science — Vivekanand College, Kolhapur"
                year="2021 - 2024 "
                score="9.03 CGPA"
              />
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {statCards.map((s, i) => (
              <div
                key={i}
                className="bg-[#0c1a22] border border-[#1a3040] hover:border-[#00e5c0] rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {s.icon}
                <div className="font-bold text-white text-sm">{s.title}</div>
                <div className="text-[#5a7a88] text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EduCard({ degree, year,score }) {
  return (
    <div className="bg-[#0c1a22] border border-[#1a3040] rounded-xl px-5 py-4 mb-3">
      <div className="text-white font-semibold text-sm">{degree}</div>
      <div className="text-[#5a7a88] text-xs mt-1">{year}</div>
       <div className="text-[#5a7a88] text-xs mt-1">{score}</div>
    </div>
  );
}

export function SectionTitle({ main, accent }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
        {main} <span className="text-[#00e5c0]">{accent}</span>
      </h2>
      <div className="w-12 h-0.5 bg-[#00e5c0] rounded-full" />
    </div>
  );
}
