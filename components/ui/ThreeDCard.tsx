"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  const slashSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (slashSoundRef.current) {
      slashSoundRef.current.volume = 1.0; // Set max volume
      slashSoundRef.current.preload = "auto";
      slashSoundRef.current.loop = true; // Ensure looping

      // Preload and play muted to prevent delays
      slashSoundRef.current.muted = true;
      slashSoundRef.current
        .play()
        .then(() => {
          slashSoundRef.current!.muted = false;
        })
        .catch((err) => console.error("Preload play error:", err));
    }
  }, []);

  const handleMouseEnter = () => {
    if (slashSoundRef.current) {
      slashSoundRef.current.currentTime = 0; // Reset sound
      slashSoundRef.current
        .play()
        .catch((err) => console.error("Play error:", err));
    }
  };

  const handleMouseLeave = () => {
    if (slashSoundRef.current) {
      slashSoundRef.current.pause(); // Stop sound
      slashSoundRef.current.currentTime = 0; // Reset position
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardContainer className="inter-var w-full md:w-11/12">
        <audio
          ref={slashSoundRef}
          src="/katana-slash.mp3"
          preload="auto"
          loop
        />
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-stone-100/[0.1] dark:bg-black dark:border-white/[0.5] border-black/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-3 border">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/gintama.gif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Gintama GIF"
              unoptimized
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
