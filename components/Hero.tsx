import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { HeroGifCards } from "./ui/HeroGifCards";
const Hero = () => {
  return (
    <div className="pb-10 md:pt-36 pt-20 ">
      <div className="h-[32rem] md:h-[38rem] mx-auto max-w-4xl flex md:items-center gap-2 relative">
        <Spotlight
          className="-top-20 left-20 md:left-50 md:-top-50"
          fill="#EBECEE"
        />
        <div className="p-4 z-2  max-w-2xl pt-20 md:pt-10 flex flex-col items-left justify-left">
          <h1 className="text-[2rem] md:text-[2.2rem] font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-gray-500 dark:from-neutral-50 dark:to-gray-400 bg-opacity-50 tracking-tight">
            Hello there! I&apos;m Anna,
            <span className="block leading-[1.25] text-[1.4rem] md:text-[1.7rem] font-bold ">
              {" "}
              a
              <span className="text-black dark:text-white">
                {" "}
                full-stack developer{" "}
              </span>
              with a{" "}
              <span className="text-black dark:text-white">
                {" "}
                strong frontend focus
              </span>
              , and
              <span className="text-black dark:text-white">
                {" "}
                hands-on problem-solver
              </span>
              . I build modern web applications with care, clarity, and a
              disciplined approach to frontend as
              <span className="text-black dark:text-white">
                {" "}
                a samurai&apos;s craft
              </span>
              .
            </span>
          </h1>
          <p className="mt-4 font-semibold text-sm md:text-lg text-neutral-800 dark:text-gray-400 text-left">
            Some people call me Annasama.
          </p>
          <div className="flex align-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Show my craft"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="mailto:mastoridouanna@icloud.com">
              <button className="mt-10 w-36 px-4 py-3 rounded-md border border-neutral-300 bg-gray-200 text-black-100 hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer text-sm font-medium">
                Reach Out
              </button>
            </a>
          </div>
        </div>
        <div className="absolute right-20 z-2 hidden lg:block w-40">
          <HeroGifCards />
        </div>
      </div>
    </div>
  );
};

export default Hero;
