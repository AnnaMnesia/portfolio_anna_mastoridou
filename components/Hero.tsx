import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ThreeDCardDemo } from "./ui/ThreeDCard";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-left justify-left">
          <h1 className="text-5xl md:text-6xl font-bold text-left max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 tracking-tight">
            Shaping the Web, <br /> One Experience at a Time
          </h1>

          <p className="mt-4 font-normal text-base sm:text-lg md:text-xl lg:text-xl text-stone-400 max-w-2xl text-left">
            Hello there! I&apos;m Anna, a{" "}
            <span className="text-white">full-stack developer</span> and
            self-proclaimed
            <span className="text-white"> code samurai</span>, on a quest to
            craft sleek and functional websites with a special love for{" "}
            <span className="text-white">front-end development</span> and{" "}
            <span className="text-white">web UI</span>. My passion for clean,
            <span className="text-white"> pixel-perfect designs</span> is
            matched only by my obsession with finding the perfect{" "}
            <span className="text-white">GIF</span> to capture every moment of
            excitement.
          </p>
          <p className="mt-4 font-normal text-base sm:text-lg md:text-xl lg:text-xl text-stone-400 max-w-2xl text-left">
            Some people call me Annasama.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my craft"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="relative z-20">
          <ThreeDCardDemo />
        </div>
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    </div>
  );
};

export default Hero;
