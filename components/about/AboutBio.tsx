import { ImageCards } from "../ui/ImageCards";
import { AboutFavList } from "./AboutFavList";

const AboutBio = () => {
  return (
    <div className="relative pt-5 pb-20">
      <div className="relative">
        <div className="absolute top-12 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <div className="relative mx-auto max-w-4xl">
          <ImageCards />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mt-14 text-sm md:text-sm font-light text-gray-400 mb-2">
            MY DRIVE
          </h2>
          <p className="font-normal text-sm md:text-md dark:text-gray-300">
            Like a samurai wields a blade with precision, I approach coding with
            strategy and discipline. Every bug is a battle, every challenge a
            duel. It&apos;s not just about writing code—it&apos;s about crafting
            solutions with patience, skill, and an unyielding drive to improve.
            <span className="dark:text-[#ecedee] text-lg">
              “First, solve the problem. Then, write the code.”
            </span>
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl flex flex-col items-center md:items-start">
          <h2 className="mt-14 text-sm md:text-sm font-light text-gray-400 mb-2 ">
            CURRENT PURSUITS, PASSIONS AND FAVORITES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AboutFavList />
          </div>
        </div>
        <div className="absolute -bottom-4 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default AboutBio;
