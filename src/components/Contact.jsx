import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ipqe12l",    
        "template_9adjiii",   
        formData,
        "i1qLJ0OwJWFEufvUl"       
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };


  return (
    <section id="contact" className="bg-[#05050A] text-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-purple-400">Touch</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Left: Contact Info */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <p className="text-gray-300">
              I'm open for opportunities and collaborations. Reach out using the form or through my contact links.
            </p>

            <div className="flex items-center gap-4 text-lg">
              <FaEnvelope className="text-purple-400" />
              <span>shubhampatil6502@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <FaLinkedin className="text-purple-400" />
              <a
                href="https://linkedin.com/in/shubhampatil20"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                linkedin.com/in/shubhampatil20
              </a>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <FaGithub className="text-purple-400" />
              <a
                href="https://github.com/Shubham6502"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                github.com/Shubham6502
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:w-1/2">
            {submitted ? (
              <div className="bg-purple-700/20 p-6 rounded text-center text-purple-300">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-purple-400"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-purple-400"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="px-4 py-2 rounded bg-[#1a1a2e] border border-gray-700 focus:outline-none focus:border-purple-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-purple-600 rounded text-white font-medium hover:bg-purple-500 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
