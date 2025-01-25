"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  // Dynamic class generation for positioning
  const positionClasses = [
    "top-[-41%] left-[1%]", // Position 1
    "top-[-20%] left-[1%]", // Position 2
    "top-[-45%] left-[19%]", // Position 3
    "top-[-26%] left-[18%]", // Position 4
    "top-[-9%] left-[15%]", // Position 5
    "top-[7%] left-[3%]", // Position 6
    "top-[7%] left-[30%]", // Position 7
    "top-[2%] left-[50%]", // Position 8
    "top-[7%] left-[67%]", // Position 9
    "top-[6%] left-[86%]", // Position 10
    "top-[-13%] left-[75%]", // Position 11
    "top-[-24%] left-[90%]", // Position 12
    "top-[-49%] left-[86%]", // Position 13
    "top-[-37%] left-[70%]", // Position 14
  ];

  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full">
        {items.map((item, idx) => (
          <div
            className={`absolute group ${positionClasses[idx]}`} // Apply the dynamic position
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover h-16 w-16 group-hover:scale-105 group-hover:z-30 relative transition duration-500 rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
