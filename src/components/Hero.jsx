import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, Send, ChevronDown } from "lucide-react";
import profileImg from "../assets/passport.jpg";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "MERN Stack Dev",
  "DSA Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00e5c0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00e5c0]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00e5c0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-sm text-[#5a7a88] tracking-[3px] mb-4">
            Hello, I'm{" "}
            <span className="text-[#00e5c0]">✦</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-3 font-momo">
            <span className="text-[#00e5c0] font-momo">Patil</span>
            <br />
            Shubham
          </h1>

          {/* Typewriter role */}
          <div className="font-mono text-base text-[#5a7a88] mb-6 tracking-wide h-7 flex items-center gap-1">
            <span className="text-[#00e5c0] font-bold">MCA Student</span>
            <span className="mx-2 text-[#1a3040]">·</span>
            <span>{displayed}</span>
            <span className="animate-pulse text-[#00e5c0]">|</span>
          </div>

          <p className="text-[#c8d8e0] text-base leading-relaxed max-w-lg mb-8">
            Building performant full-stack web apps with{" "}
            <span className="text-[#00e5c0] font-semibold">React, Node.js, Express.js &amp; MongoDB</span>.
            Passionate about writing clean, scalable code and solving complex problems
            through data structures &amp; algorithms.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 bg-[#00e5c0] hover:bg-[#00bfa0] text-black font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              <Send size={15} /> Get In Touch
            </button>
            <a
              href="https://drive.google.com/file/d/16XG9nb0DVdt4uCdA_pZl45R7gDZUN2n5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#1a3040] hover:border-[#00e5c0] text-[#c8d8e0] hover:text-[#00e5c0] font-semibold px-6 py-3 rounded-lg transition-all text-sm"
            >
              <FileText size={15} /> Resume
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Github size={16} />, href: "https://github.com/shubham6502" },
              { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/shubhampatil20" },
              { icon: <Mail size={16} />, href: "mailto:shubhampatil6502@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[#1a3040] hover:border-[#00e5c0] rounded-lg flex items-center justify-center text-[#5a7a88] hover:text-[#00e5c0] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right – avatar */}
        <div
          className={`flex justify-center md:justify-end relative transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-full border-2 border-[#00e5c0] bg-[#0c1a22] flex items-center justify-center text-8xl text-[#00e5c0] shadow-[0_0_80px_rgba(0,229,192,0.15)]">
             <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            {/* Stat bubble */}
            <div className="absolute -bottom-3 -right-3 bg-[#0c1a22] border border-[#1a3040] rounded-xl px-4 py-3 text-center shadow-xl">
              <div className="font-mono text-2xl font-black text-[#00e5c0]">377+</div>
              <div className="text-xs text-[#5a7a88] mt-0.5">DSA Solved</div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -left-3 bg-[#0c1a22] border border-[#1a3040] rounded-xl px-3 py-2 text-center shadow-xl">
              <div className="font-mono text-lg font-black text-[#00e5c0]">MCA</div>
              <div className="text-xs text-[#5a7a88]">Student</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#5a7a88] text-xs animate-bounce">
        <span>scroll</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
