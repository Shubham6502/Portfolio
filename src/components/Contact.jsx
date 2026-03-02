import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "shubhampatil6502@gmail.com",
    href: "mailto:shubhampatil6502@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shubhampatil20",
    href: "https://linkedin.com/in/shubhampatil20",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/shubham6502",
    href: "https://github.com/shubham6502",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
  },
];

export default function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.from_name || !form.from_email || !form.message) return;
    setSent(true);
    emailjs
      .send(
        "service_ipqe12l",    
        "template_9adjiii",   
        form,
        "i1qLJ0OwJWFEufvUl"       
      )
      .then(() => {
        setSent(false);
        setForm({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setSent(false));
    
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="Get in" accent="Touch" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-[#c8d8e0] text-sm leading-relaxed mb-8">
              I'm open for opportunities and collaborations. Reach out using the form or
              through my contact links below.
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#00e5c0]/8 border border-[#00e5c0]/20 rounded-xl flex items-center justify-center text-[#00e5c0] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#c8d8e0] hover:text-[#00e5c0] text-sm font-semibold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#c8d8e0] text-sm font-semibold">
                        {item.value}
                      </span>
                    )}
                    <div className="text-[#5a7a88] text-xs mt-0.5">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex flex-col gap-4">
            <FormInput
              placeholder="Your Name"
              value={form.from_name}
              onChange={(v) => setForm({ ...form, from_name: v })}
            />
            <FormInput
              placeholder="Your Email"
              type="email"
              value={form.from_email}
              onChange={(v) => setForm({ ...form, from_email: v })}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#0c1a22] border border-[#1a3040] focus:border-[#00e5c0] rounded-xl px-4 py-3.5 text-white text-sm placeholder-[#5a7a88] outline-none transition-colors resize-none font-['Syne',sans-serif]"
            />
            <button
              onClick={handleSubmit}
              className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all text-sm ${
                sent
                  ? "bg-green-500 text-white"
                  : "bg-[#00e5c0] hover:bg-[#00bfa0] text-black hover:-translate-y-0.5"
              }`}
            >
              <Send size={15} />
              {sent ? "Message Sent! ✓" : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#0c1a22] border border-[#1a3040] focus:border-[#00e5c0] rounded-xl px-4 py-3.5 text-white text-sm placeholder-[#5a7a88] outline-none transition-colors font-['Syne',sans-serif]"
    />
  );
}
