import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import {HeroGifCards} from './ui/HeroGifCards'
const Hero = () => {
  return (
    <div className="pb-10 md:pt-36 pt-20 ">
      <div className="h-[32rem] md:h-[40rem] mx-auto max-w-4xl flex md:items-center gap-2 relative">
        <Spotlight
          className="-top-20 left-20 md:left-50 md:-top-50"
          fill="#EBECEE"
        />
        <div className="p-4 z-2 max-w-2xl pt-20 md:pt-0 flex flex-col items-left justify-left">
          <h1 className="text-4xl  md:text-4xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-gray-400 bg-opacity-50 tracking-tight">
            Shaping the Web, <br /> One Experience at a Time
          </h1>

          <p className="mt-4 font-normal text-sm md:text-md text-gray-400 text-left">
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
          <p className="mt-4 font-normal tex-sm md:text-md text-gray-400 text-left">
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
          <HeroGifCards/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
