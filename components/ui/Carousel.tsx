"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CarouselProps = {
  project: {
    carouselImages: string[];
  };
};

const AUTO_PLAY_INTERVAL = 4000;

export const Carousel = ({ project }: CarouselProps) => {
  const { carouselImages } = project;

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // Measure slide width (responsive)
  useEffect(() => {
    const measure = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth + 9); // gap-3
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-5 pb-16">
      <div className="relative">
        <div className="absolute top-1 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <div className="relative p-4 mx-auto max-w-4xl">
          <h2 className="mt-4 text-xs font-semibold">VISUALS</h2>
        </div>

        <div className="w-full">
          {/* Track */}
          <motion.div
            className="flex gap-3 px-4 sm:px-6 md:px-16 lg:px-24 cursor-grab"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            animate={{ x: -index * slideWidth }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            {carouselImages.map((img, i) => (
              <div
                ref={i === 0 ? slideRef : null}
                key={i}
                className="
              relative shrink-0 rounded-2xl overflow-hidden
              w-[92vw] h-[64vw]
              sm:w-[88vw] sm:h-[54vw]
              md:w-[720px] md:h-[490px]
              lg:w-[806px] lg:h-[569px]
            "
              >
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="
                (max-width: 640px) 92vw,
                (max-width: 768px) 88vw,
                (max-width: 1444px) 720px,
                820px
              "
                />
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="relative"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.span
                  animate={{
                    width: index === i ? 20 : 8,
                    opacity: index === i ? 1 : 0.4,
                  }}
                  className="block h-2 rounded-full bg-black dark:bg-white"
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-10 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};
