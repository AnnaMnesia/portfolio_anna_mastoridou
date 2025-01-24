import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
};

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
}) => {
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
    <div className="relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden">
      <div className="flex md:flex-row flex-col">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 p-2 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <div className="rounded-lg bg-[#1B1B1D] h-64 w-80 p-3">
              <div className="flex flex-col">
                <p className="text-xs font-light ">{testimonial.quote}</p>
                <div className="flex items-center pt-3 gap-3">
                  <Image
                    src={testimonial.src}
                    alt="company logo"
                    width="40"
                    height="40"
                    className="rounded-full object-cover "
                  />
                  <div>
                    <p className="text-sm ">{testimonial.name}</p>
                    <p className="text-xs ">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
