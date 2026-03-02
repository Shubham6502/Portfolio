import { useState, useEffect } from "react";

const navLinks = ["About", "Skills", "Projects", "DSA", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050d12]/90 backdrop-blur-xl border-b border-[#1a3040]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-mono text-lg font-bold tracking-wider">
          <span className="text-[#00e5c0]">&lt;</span>
          <span className="text-white">SHUBHAM</span>
          <span className="text-[#00e5c0]">/&gt;</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-[#c8d8e0] hover:text-[#00e5c0] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block bg-[#00e5c0] hover:bg-[#00bfa0] text-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#00e5c0] text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080f16] border-t border-[#1a3040] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-[#c8d8e0] hover:text-[#00e5c0] text-sm font-semibold tracking-wide"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-2 bg-[#00e5c0] text-black font-bold text-sm px-5 py-2 rounded-lg w-fit"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
