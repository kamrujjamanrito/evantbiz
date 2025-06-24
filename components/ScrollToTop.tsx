"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="back-top"
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-long-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
