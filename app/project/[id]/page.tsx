// pages/project bsy id
"use client";
import { useState, useEffect } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import ProjectHero from "@/components/projectById/ProjectHero";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { projects } from "@/data";
import ProjectSectionGoals from "@/components/projectById/ProjectSectionGoals";
import ProjectProblem from "@/components/projectById/ProjectProblem";
import { Carousel } from "@/components/ui/Carousel";
import ProjectStack from "@/components/projectById/ProjectStack";
import ProjectImpact from "@/components/projectById/ProjectImpact";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setScrolled(scrollY > 0);
    setAtBottom(scrollY + windowHeight >= documentHeight - 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) return <div>Project not found</div>;

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative">
        {/* Vertical Hyphen Lines (Left & Right) */}
        <div className="absolute top-0 left-10 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_18px] opacity-15 hidden lg:block"></div>
        <div className="absolute top-0 left-40 w-[2px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_18px] opacity-15 hidden lg:block"></div>
        <div className="absolute top-0 right-10 w-[1.5px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_18px] opacity-15 hidden lg:block"></div>
        <div className="absolute top-0 right-40 w-[1.5px] h-full bg-[linear-gradient(to_bottom,_gray_60%,_transparent_50%)] bg-[length:1px_18px] opacity-15 hidden lg:block"></div>
        <div
          className={`fixed top-0 left-0 w-full h-12 backdrop-blur-md z-10 transition-all duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`fixed bottom-0 left-0 w-full h-12 backdrop-blur-md z-10 transition-all duration-300 ${
            atBottom ? "opacity-0" : "opacity-100"
          }`}
        ></div>

        <FloatingNav navItems={navItems} />
        <ThemeToggle />
        <ProjectHero project={project} />
        <ProjectSectionGoals project={project as any} />
        <Carousel project={project as any} />
        <ProjectProblem project={project as any} />
        <ProjectStack project={project as any} />
        <ProjectImpact project={project as any} />
        <Footer />
      </div>
    </main>
  );
};

export default ProjectPage;
