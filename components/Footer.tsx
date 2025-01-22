import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-4xl pt-20 pb-10" id="contact">
      <div className="flex flex-col max-w-4xl items-end">
        <h1 className="text-lg font-light text-gray-400">
          STEP FORWARD AND CONTACT ME{" "}
          <span className="text-gray-400 ">today</span>
        </h1>

        <a
          href="mailto:mastoridouanna@icloud.com"
          className="underline max-w-2xl text-end text-3xl hover:text-gray-400"
        >
          Let’s craft something with precision and purpose.
          mastoridouanna@icloud.com
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          OR find me forging my craft, one line of code at a time.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
