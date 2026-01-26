import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";

const AboutFavList = () => {
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  // Generate random rotation values only once per render
  const randomRotation = useMemo(() => Math.random() * 35 - 10, []);

  const [isHoveredLotr, setIsHoveredLotr] = useState(false);
  const [isHoveredJujutsu, setIsHoveredJujutsu] = useState(false);

  return (
    <>
      {/* The Lord of the Rings Section */}
      <div className="flex flex-col items-center md:items-start justify-center p-4 ">
        <motion.div
          variants={imageVariants}
          style={{
            rotate: randomRotation,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          onMouseEnter={() => setIsHoveredLotr(true)}
          onMouseLeave={() => setIsHoveredLotr(false)}
          className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
        >
          <Image
            src={isHoveredLotr ? "/aragorn.gif" : "/frodo.jpeg"}
            alt="Lord of the Rings"
            width={500}
            height={500}
            className="rounded-sm h-16 w-24 object-cover"
          />
        </motion.div>
        <p className="mt-2 text-xs text-gray-400 font-serif">
          <span className="text-sm font-semibold text-neutral-800 dark:text-[#ecedee]">
            The Lord of the Rings
          </span>{" "}
          • Best trilogy of all time
        </p>
        <p className="text-sm mt-2 text-center md:text-start">
          I could be Frodo, but let’s be real—I’m definitely Aragorn.
        </p>
      </div>

      {/* Jujutsu Kaisen Section */}
      <div className="flex flex-col items-center md:items-start justify-center p-4">
        <motion.div
          variants={imageVariants}
          style={{
            rotate: randomRotation,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          onMouseEnter={() => setIsHoveredJujutsu(true)}
          onMouseLeave={() => setIsHoveredJujutsu(false)}
          className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
        >
          <Image
            src={isHoveredJujutsu ? "/sukuna.gif" : "/gojogeto.jpeg"}
            alt="Jujutsu Kaisen"
            width={500}
            height={500}
            className="rounded-sm h-16 w-24 object-cover"
          />
        </motion.div>
        <p className="mt-2 text-xs text-gray-400 font-serif">
          <span className="text-sm font-semibold text-neutral-800 dark:text-[#ecedee] ">
            Jujutsu Kaisen
          </span>{" "}
          • Current Anime
        </p>
        <p className="text-sm mt-2 text-center md:text-start">
          Gojo and Geto are iconic, but let’s be real SUKUNA is the real MVP.
          Anti-hero? Sure, but he&apos;s definitely the strongest one! (Plot
          armor is overrated anyway!)
        </p>
      </div>

      {/* Reading Section */}
      <div className="flex flex-col items-center md:items-start justify-center p-4">
        <div className="flex flex-row">
          <motion.div
            variants={imageVariants}
            style={{
              rotate: randomRotation,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/ikigai.jpeg"}
              alt="Ikigai"
              width={500}
              height={500}
              className="rounded-sm h-24 w-20 object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            style={{
              rotate: randomRotation,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/thecreativeact.jpeg"}
              alt="The Creative Act"
              width={500}
              height={500}
              className="rounded-sm h-24 w-20 object-cover"
            />
          </motion.div>
        </div>
        <p className="mt-3 text-xs text-gray-400">I&apos;m currently Reading</p>
        <p className="text-sm mt-2 font-semibold text-center md:text-start">
          Ikigai: The Japanese secret to a long and happy life. The Creative
          Act: A Way of Being
        </p>
        <p className="text-sm mt-2 text-gray-400">By Ken Mogi, Rick Rubin</p>
      </div>

      {/* The Witcher Section */}
      <div className="flex flex-col items-center md:items-start justify-center p-4">
        <div className="flex flex-row">
          <motion.div
            variants={imageVariants}
            style={{
              rotate: randomRotation,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/witcher.png"}
              alt="The Witcher 3"
              width={500}
              height={500}
              className="rounded-sm h-24 w-20 object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            style={{
              rotate: randomRotation,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-md p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/coen.png"}
              alt="The Blood of Dawnwalker"
              width={500}
              height={500}
              className="rounded-sm h-24 w-20 object-cover"
            />
          </motion.div>
        </div>
        <p className="mt-2 text-xs text-gray-400 font-serif">
          <span className="text-sm font-semibold text-neutral-800 dark:text-[#ecedee]">
            The Witcher 3: Wild Hunt
          </span>{" "}
          • Favorite RPG game
        </p>
        <p className="text-sm mt-2 text-center md:text-start">
          Geralt&apos;s adventures never get old, but I&apos;m definitely
          counting down the days until The Blood of Dawnwalker drops. Let&apos;s
          hope it&apos;s as epic as a Witcher quest!
        </p>
      </div>
    </>
  );
};

export { AboutFavList };
