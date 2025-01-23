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
      <CardContainer className="inter-var w-80 relative group">
        <audio
          ref={slashSoundRef}
          src="/katana-slash.mp3"
          preload="auto"
          loop
        />
        <CardBody className="relative group/card dark:hover:shadow-3xl dark:hover:shadow-gray-100/[0.6] w-auto sm:w-[30rem] h-auto rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[rgba(255,255,255,0.1)] before:to-[rgba(0,0,0,0.2)] before:blur-lg before:pointer-events-none shadow-2xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.7),_0_4px_12px_rgba(0,0,0,0.4)]">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/gintama.gif"
              height="1000"
              width="1000"
              className="h-full w-90 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Gintama GIF"
              unoptimized
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
