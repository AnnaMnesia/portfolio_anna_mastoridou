"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardBigProjectProps = {
  project: {
    id: number;
    title: string;
    src: string;
    demoUrl: string;
  };
};

export const CardBigProject = React.memo(({ project }: CardBigProjectProps) => {
      const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <div
         onClick={() => router.push(project.demoUrl)}
        className={cn(
          "group relative rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden h-[360px] md:h-76 w-full transition-all duration-300 ease-out cursor-pointer",
        )}
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="rounded-lg absolute object-cover p-1.5 inset-0"
        />
      </div>
    </div>
  );
});

CardBigProject.displayName = "CardBigProject";
