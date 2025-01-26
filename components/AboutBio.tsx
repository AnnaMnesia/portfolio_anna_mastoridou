import { ImageCards } from "./ui/ImageCards";
import {AboutFavList} from "./ui/AboutFavList";

const AboutBio = () => {
  return (
    <div id="projects" className="relative pt-10 pb-20">
      <div className="relative">
        <div className="absolute top-12 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <div className="relative mx-auto max-w-4xl">
          <ImageCards />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mt-14 text-sm md:text-sm font-light text-gray-400 mb-2">
            MY DRIVE
          </h2>
          <p className="font-normal text-sm md:text-md text-gray-300">
            Like a samurai wields a blade with precision, I approach coding with
            strategy and discipline. Every bug is a battle, every challenge a
            duel. It&apos;s not just about writing code—it&apos;s about crafting
            solutions with patience, skill, and an unyielding drive to improve.
            <span className="text-[#ecedee] text-lg">
              “First, solve the problem. Then, write the code.”
            </span>
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mt-14 text-sm md:text-sm font-light text-gray-400 mb-2">
            CURRENT PURSUITS, PASSIONS AND FAVORITES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">       
           <AboutFavList/>
          </div>
        </div>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>
      </div>
    </div>
  );
};

export default AboutBio;
