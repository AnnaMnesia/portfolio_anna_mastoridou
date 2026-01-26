"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// CARD SMALL ------------------------------
// -----------------------------------------
export const Card = React.memo(
  ({
    project,
    index,
    hovered,
    setHovered,
  }: {
    project: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const router = useRouter();

    return (
      <div
        className="flex flex-col gap-2"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Clickable Card */}
        <div
         onClick={() => router.push(`/project/${project.id}`)}
          // onClick={() => router.push(project.link)}
          className={cn(
            "group relative rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden h-[360px] md:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Border styles added here
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          )}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="rounded-lg absolute object-cover p-1.5 inset-0"
          />
        </div>

        {/* Project Details */}
        <div
          className={cn(
            "transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          )}
        >
          <div className="flex justify-between sm:items-start w-full gap-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-md font-light text-gray-400 dark:text-gray-400">
              {project.year}
            </p>
          </div>
          <p className="text-md font-light text-gray-400 dark:text-gray-400">
            {project.name}
          </p>
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";

type Card = {
  id: number;
  title: string;
  name: string;
  year: string;
  src: string;
};
// CARD SMALL ------------------------------
// -----------------------------------------

// CARD BIG --------------------------------
// -----------------------------------------
export const CardBig = React.memo(
  ({
    project,
    index,
    hovered,
    setHovered,
  }: {
    project: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const router = useRouter();

    return (
      <div
        className="flex flex-col gap-2"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Clickable Card */}
        <div
          onClick={() => router.push(`/project/${project.id}`)}
          // onClick={() => router.push(project.link)}
          className={cn(
            "group relative rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden h-[360px] md:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Border styles added here
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          )}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="rounded-lg absolute object-cover p-1.5 inset-0"
          />
        </div>

        {/* Project Details */}
        <div
          className={cn(
            "transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          )}
        >
          <div className="flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-md font-light text-gray-400 dark:text-gray-400">
              {project.year}
            </p>
          </div>
          <p className="text-md font-light text-gray-400 dark:text-gray-400">
            {project.name}
          </p>
        </div>
      </div>
    );
  },
);

CardBig.displayName = "CardBig";

type CardBig = {
  id: number;
  title: string;
  name: string;
  year: string;
  src: string;
};
// CARD BIG --------------------------------
// -----------------------------------------

export function FocusCards({ projects }: { projects: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className=" mt-10 ">
      {featuredProject && (
        <CardBig
          project={featuredProject}
          index={0}
          hovered={hovered}
          setHovered={setHovered}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10 w-full">
        {otherProjects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={index + 1} // keep indexes consistent
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
