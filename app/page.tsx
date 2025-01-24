"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {Testimonials} from '@/components/Testimonials'; 

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setScrolled(scrollY > 0);
    setAtBottom(scrollY + windowHeight >= documentHeight - 5); // Small threshold
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative">
        {/* Vertical Hyphen Lines (Left & Right) */}
        <div className="absolute top-0 left-10 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_24px] opacity-15 hidden xl:block"></div>
        <div className="absolute top-0 left-40 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_24px] opacity-15 hidden xl:block"></div>

        <div className="absolute top-0 right-10 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_24px] opacity-15 hidden xl:block"></div>
        <div className="absolute top-0 right-40 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_24px] opacity-15 hidden xl:block"></div>

        {/* Blur effect on top */}
        <div
          className={`fixed top-0 left-0 w-full h-12 backdrop-blur-md z-10 transition-all duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Blur effect on bottom (disappears when at the bottom) */}
        <div
          className={`fixed bottom-0 left-0 w-full h-12 backdrop-blur-md z-10 transition-all duration-300 ${
            atBottom ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        <FloatingNav navItems={navItems} />
        <Hero />
        <Projects />
        <Experience />
        <Testimonials/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
