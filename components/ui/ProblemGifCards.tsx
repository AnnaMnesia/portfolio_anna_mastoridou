"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { problemGifs } from "@/data";

export const ProblemGifCards = () => {
  const [gif, setGif] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * problemGifs.length);
    setGif(problemGifs[randomIndex]);
  }, []);

  if (!gif) return null;

  return (
    <div className="flex justify-center">
      <motion.div
        className="
          w-[274px] h-[222px]
          rounded-xl p-1
          bg-white dark:bg-neutral-800
          border border-neutral-100 dark:border-neutral-700
          shadow-lg
          overflow-hidden
        "
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={gif}
            alt="GIF"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
};
