import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full 
        bg-purple-400 border border-gray-600 text-white 
        hover:border-purple-400 hover:text-purple-400
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
    >
      <AiOutlineArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
