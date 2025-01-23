"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
          className={cn(
            "group relative rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Border styles added here
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="rounded-lg absolute object-cover p-2 inset-0"
          />
        </div>

        {/* Project Details */}
        <div
          className={cn(
            "transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex justify-between items-center w-full">
            <p className="text-md font-light text-gray-400 dark:text-gray-400">
              {project.name}
            </p>
            <p className="text-md font-light text-gray-400 dark:text-gray-400">
              {project.year}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  id: string;
  title: string;
  name: string;
  year: string;
  src: string;
};

export function FocusCards({ projects }: { projects: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10 w-full">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          project={project}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
