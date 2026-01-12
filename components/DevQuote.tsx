"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DevQuote() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative pt-10 pb-20">
      <div className="relative">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <div className="flex flex-col items-center mt-5">
          <div className="py-5">
            <p className="font-semibold text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-400  to-neutral-800 dark:from-neutral-50 dark:to-gray-400 bg-opacity-50 tracking-tight">
              First, solve the problem. Then, write the code.
            </p>
            <div
              className="relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <a
                href="https://www.defprogramming.com/q/037b1d98ecfc/"
                className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light"
              >
                – JOHN JOHNSON
              </a>
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -15, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute top-10 left-[7rem] transform -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded-md shadow-md"
                  >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                    <div className="font-base text-white relative z-30 text-xs">
                      Click me
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </section>
  );
}
