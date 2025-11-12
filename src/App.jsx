import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Flipbook from "./components/Flipbook";

export default function App() {
  const [showFlipbook, setShowFlipbook] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      <Navbar onShowFlipbook={() => setShowFlipbook(true)} />

      {showFlipbook ? (
        <Flipbook onClose={() => setShowFlipbook(false)} />
      ) : (
        <>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </>
      )}
    </div>
  );
}
