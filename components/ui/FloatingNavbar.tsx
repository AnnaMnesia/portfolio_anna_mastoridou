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
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          // layout
          "fixed top-10 inset-x-0 mx-auto z-[5000]",
          "flex max-w-fit items-center justify-center",
          "md:px-8 px-4 py-4 space-x-2 md:space-x-4",
          "rounded-full border",
          // blur

          // LIGHT MODE
          "bg-white border-black/10 ",
          // DARK MODE
          "dark:bg-black/40 dark:border-white/20 dark:shadow-none",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = currentPath === navItem.link;

          return (
            <button
              key={`navItem-${idx}`}
              onClick={() => handleNavigation(navItem.link)}
              className={cn(
                "relative flex items-center space-x-1 transition-colors",
                isActive
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-400 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm md:text-[1rem] cursor-pointer font-semibold">
                {navItem.name}
              </span>
            </button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
