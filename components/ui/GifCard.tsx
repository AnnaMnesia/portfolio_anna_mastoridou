import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { gifs } from "@/data";

interface GifCardsProps {
  index: number; // Expect an index as a prop
}

export const GifCard: React.FC<GifCardsProps> = ({ index }) => {
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

  // Get the GIF based on the index prop
  const specificGif = gifs[index];

  return (
    <div className="flex md:items-end tems-start mb-5 mr-5 ">
      {specificGif && (
        <motion.div
          variants={imageVariants}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shadow-lg overflow-hidden"
        >
          <Image
            src={specificGif}
            alt="GIF"
            width="900"
            height="550"
            className="rounded-lg h-40 w-fit object-cover"
            unoptimized
          />
        </motion.div>
      )}
    </div>
  );
};
