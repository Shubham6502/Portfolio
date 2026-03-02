import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: <Github size={16} />, href: "https://github.com/shubham6502" },
  { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/shubhampatil20" },
  { icon: <Mail size={16} />, href: "mailto:shubhampatil6502@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a3040] px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[#00e5c0] font-bold text-base">
            {/* <span className="text-white">&lt;</span>dev{" "} */}
            {/* <span className="text-white">/&gt;</span> */}
          </div>
          <div className="text-[#5a7a88] text-xs mt-1">
            Shubham Patil · Software Engineer &amp; Full-Stack Developer
          </div>
        </div>

        <div className="flex gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-[#1a3040] hover:border-[#00e5c0] rounded-lg flex items-center justify-center text-[#5a7a88] hover:text-[#00e5c0] transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="text-[#5a7a88] text-xs">
          © 2026 Shubham Patil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
