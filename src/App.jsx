import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DSA from "./components/DSA";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050d12] text-[#c8d8e0] min-h-screen font-['Momo Trust Display', sans-serif] relative overflow-x-hidden">
      {/* Dot grid background */}
      <div
        className="fixed inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #00e5c0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#00e5c0]/[0.04] rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[#00e5c0]/[0.03] rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSA />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
