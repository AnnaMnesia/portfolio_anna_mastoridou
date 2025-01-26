import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start justify-center p-4">
        <motion.div
          variants={imageVariants}
          style={{
            rotate: Math.random() * 25 - 10,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
        >
          <Image
            src={isHovered ? "/aragorn.gif" : "/frodo.jpeg"}
            alt="Lord of the Rings"
            width={500}
            height={500}
            className="rounded-lg h-16 w-24 object-cover"
          />
        </motion.div>
        <p className="mt-2 text-xs text-gray-400">
          <span className="text-sm font-semibold text-[#ecedee]">
            The Lord of the Rings
          </span>{" "}
          • Best trilogy of all time
        </p>
        <p className="text-sm mt-2">
          I could be Frodo, but let’s be real—I’m definitely Aragorn.
        </p>
      </div>

      {/* Add more card sections as needed */}
      {/* Jujutsu Kaisen */}
      <div className="flex flex-col items-start justify-center p-4">
        <motion.div
          variants={imageVariants}
          style={{
            rotate: Math.random() * 25 - 10,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
        >
          <Image
            src={isHovered ? "/sukuna.gif" : "/gojogeto.jpeg"}
            alt="Jujutsu Kaisen"
            width={500}
            height={500}
            className="rounded-lg h-16 w-24 object-cover"
          />
        </motion.div>
        <p className="mt-2 text-xs text-gray-400">
          <span className="text-sm font-semibold text-[#ecedee]">
            Jujutsu Kaisen
          </span>{" "}
          • Current Anime
        </p>
        <p className="text-sm mt-2">
          Gojo and Geto are iconic, but let’s be real SUKUNA is the real MVP.
          Anti-hero? Sure, but he's definitely the strongest one! (Plot armor is
          overrated anyway!)
        </p>
      </div>

      <div className="flex flex-col items-start justify-center p-4">
        <div className="flex flex-row">
          <motion.div
            variants={imageVariants}
            style={{
              rotate: Math.random() * 25 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onMouseEnter={() => setIsHovered(true)} // Trigger GIF on hover
            onMouseLeave={() => setIsHovered(false)} // Revert to static image
            className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/ikigai.jpeg"}
              alt="Jujutsu Kaisen"
              width={500}
              height={500}
              className="rounded-lg h-24 w-20 object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            style={{
              rotate: Math.random() * 25 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onMouseEnter={() => setIsHovered(true)} // Trigger GIF on hover
            onMouseLeave={() => setIsHovered(false)} // Revert to static image
            className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/thecreativeact.jpeg"}
              alt="Jujutsu Kaisen"
              width={500}
              height={500}
              className="rounded-lg h-24 w-20 object-cover"
            />
          </motion.div>
        </div>

        <p className="mt-3 text-xs text-gray-400">I'm currently Reading</p>
        <p className="text-sm mt-2 font-semibold">
          Ikigai: The Japanese secret to a long and happy life. The Creative
          Act: A Way of Being
        </p>
        <p className="text-sm mt-2 text-gray-400">By Ken Mogi, Rick Rubin</p>
      </div>

      <div className="flex flex-col items-start justify-center p-4">
        <div className="flex flex-row">
          <motion.div
            variants={imageVariants}
            style={{
              rotate: Math.random() * 25 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onMouseEnter={() => setIsHovered(true)} // Trigger GIF on hover
            onMouseLeave={() => setIsHovered(false)} // Revert to static image
            className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/witcher.png"}
              alt="The Witcher 3"
              width={500}
              height={500}
              className="rounded-lg h-24 w-20 object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            style={{
              rotate: Math.random() * 25 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onMouseEnter={() => setIsHovered(true)} // Trigger GIF on hover
            onMouseLeave={() => setIsHovered(false)} // Revert to static image
            className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
          >
            <Image
              src={"/coen.png"}
              alt="The Blood of Dawnwalker"
              width={500}
              height={500}
              className="rounded-lg h-24 w-20 object-cover"
            />
          </motion.div>
        </div>

        <p className="mt-2 text-xs text-gray-400">
          <span className="text-sm font-semibold text-[#ecedee]">
            The Witcher 3: Wild Hunt
          </span>{" "}
          • Favorite RPG game
        </p>
        <p className="text-sm mt-2">
          Geralt's adventures never get old, but I’m definitely counting down
          the days until The Blood of Dawnwalker drops. Let's hope it's as epic
          as a Witcher quest!
        </p>
      </div>
    </>
  );
};

export { AboutFavList };
