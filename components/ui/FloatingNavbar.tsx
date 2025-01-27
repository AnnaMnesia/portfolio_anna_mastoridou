"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleNavigation = (link: string) => {
    if (link.startsWith("#")) {
      // Handle in-page scrolling
      if (currentPath === "/") {
        const element = document.getElementById(link.substring(1)); // Remove '#' and find the element
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        // Navigate to the homepage and scroll to the section
        router.push(`/${link}`);
      }
    } else {
      // Navigate to a different page
      router.push(link);
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] md:pr-8 pr-4 md:pl-8 pl-4 py-4 items-center justify-center md:space-x-4 space-x-2",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(235, 236, 238, 0.2)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`navItem-${idx}`}
            onClick={() => handleNavigation(navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm md:text-lg !cursor-pointer">
              {navItem.name}
            </span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
