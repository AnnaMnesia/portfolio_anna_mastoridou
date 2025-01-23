"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gifs } from "@/data";

export const HeroGifCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slashSoundRef = useRef<HTMLAudioElement | null>(null);

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.slice(0, 4).length); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    if (slashSoundRef.current) {
      slashSoundRef.current.currentTime = 0;
      slashSoundRef.current
        .play()
        .catch((err) => console.error("Play error:", err));
    }
  };
  const handleMouseLeave = () => {
    if (slashSoundRef.current) {
      slashSoundRef.current.pause();
      slashSoundRef.current.currentTime = 0;
    }
  };

  const positions = [
    { x: -70, y: -220, rotate: -10 }, // Top
    { x: 50, y: -100, rotate: 15 }, // Middle-right
    { x: 60, y: 50, rotate: 5 }, // Lower-right
    { x: 0, y: 190, rotate: 10 }, // Bottom
  ];

  return (
    <div className="max-w-50">
      <div className="relative flex flex-col items-center justify-center">
        {/* Sound */}
        <audio
          ref={slashSoundRef}
          src="/katana-slash.mp3"
          preload="auto"
          loop
        />
        {gifs.slice(0, 4).map(
          (
            gif,
            idx 
          ) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                scale: 0.9,
                x: positions[idx % positions.length].x,
                y: positions[idx % positions.length].y,
                rotate: positions[idx % positions.length].rotate,
              }}
              animate={{
                opacity: currentIndex === idx ? 1 : 0.5,
                scale: currentIndex === idx ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden"
            >
              <Image
                src={gif}
                alt="GIF"
                width={500}
                height={500}
                className="rounded-lg h-50 w-50 md:h-40 md:w-40 object-cover"
                unoptimized
              />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};
