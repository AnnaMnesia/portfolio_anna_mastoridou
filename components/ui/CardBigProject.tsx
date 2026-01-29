"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardBigProjectProps = {
  project: {
    id: number;
    title: string;
    srclight: string;
    srcdark: string;
    coverlight: string;
    coverdark: string;
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
          src={project.coverlight}
          alt={project.title}
          fill
          className="absolute inset-0 object-cover p-1.5 rounded-lg dark:hidden"
        />

        <Image
          src={project.coverdark}
          alt={project.title}
          fill
          className="absolute inset-0 object-cover p-1.5 rounded-lg hidden dark:block"
        />
      </div>
    </div>
  );
});

CardBigProject.displayName = "CardBigProject";
