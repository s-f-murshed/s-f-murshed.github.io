import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ onShowFlipbook }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  // ✅ Proper scroll spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // section is active when 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-slate-300 items-center">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`cursor-pointer relative transition-colors ${
                activeSection === item
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </li>
          ))}
          {/* <li>
            <button
              onClick={onShowFlipbook}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
            >
              View Resume 📖
            </button>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Drawer with smooth animation */}
      <div
        className={`md:hidden bg-slate-900 border-t border-slate-700 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-slate-300">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`cursor-pointer ${
                activeSection === item
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
          {/* <li>
            <button
              onClick={() => {
                onShowFlipbook();
                setMenuOpen(false);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
            >
              View Resume 📖
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
