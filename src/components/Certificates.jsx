import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";
import { ExternalLink} from "lucide-react";

const certs = [
   {
    icon: "🔥",
    name: "Problem Solving Intermediate",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/64255f24010b",
  },
   {
    icon: "💡",
    name: "Problem Solving Basic",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/806763808ee2",
  },
  {
    icon: "☕",
    name: "Java Basic",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/a5624151686b",
  },
  {
    icon: '📚',
    name: "DSA With Java",
    issuer: "Apna College",
    year: "2024",
    link: null,
  },
 
 
  {
    icon: "⚛️",
    name: "Full Stack Development",
    issuer: "SITS Kolhapur",
    year: "2020",
    link: null,
  },
 
];

export default function Certificates() {
  const [ref, visible] = useInView();

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="My" accent="Certificates" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, delay }) {
  return (
    <div
      className="bg-[#0c1a22] border border-[#1a3040] hover:border-[#00e5c0] rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-11 h-11 bg-[#00e5c0]/10 border border-[#00e5c0]/30 rounded-xl flex items-center justify-center text-xl">
        {cert.icon}
      </div>

      <div>
        <div className="text-white font-bold text-sm group-hover:text-[#00e5c0] transition-colors">
          {cert.name}
        </div>
        <div className="text-[#5a7a88] text-xs mt-1">{cert.issuer}</div>
      </div>

      <div className="font-mono text-xs text-[#00e5c0] mt-auto">// {cert.year}</div>

      <a
        href={cert.link}
        target="blank"
        className="flex items-center gap-1.5 text-[#5a7a88] hover:text-[#00e5c0] text-xs font-semibold transition-colors"
      >
        <ExternalLink size={12} /> View Certificate
      </a>
    </div>
  );
}
