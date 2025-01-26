import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data";

export const ImageCards = () => {
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
  return (
    <div className="flex md:items-center items-center justify-center">
      <div className="flex flex-wrap md:flex-row items-center justify-around">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-2 mt-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="my images"
              width="500"
              height="500"
              className="rounded-lg h-64 w-44 md:h-64 md:w-44 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
