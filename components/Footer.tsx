import { socialMedia } from "@/data";
import { GifCard } from "./ui/GifCard";

const Footer = () => {
  const gifIndex = 5;
  return (
    <footer id="contact" className="pt-10 pb-24">
      <div className="relative">
        <div className="absolute top-0 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <div className="mx-auto max-w-4xl py-10">
          <div className="flex flex-col max-w-4xl items-start">
            <GifCard index={gifIndex} />
            <h1 className="mt-4 text-md font-light text-gray-400">
              REACH OUT AND GET IN TOUCH{" "}
            </h1>
            <a
              href="mailto:mastoridouanna@icloud.com"
              className="hover:underline max-w-2xl text-start text-xl md:text-3xl hover:text-violet font-semibold "
            >
              Contact me and let&apos;s craft something with purpose.
              <span className="underline">mastoridouanna@icloud.com</span>
            </a>
          </div>
          <div className="flex mt-7 md:flex-row flex-col justify-between items-center gap-4 pb-1">
            <p className="text-base md:font-normal font-light">
              OR FIND ME FORGING MY CRAFT ON
            </p>

            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm font-light md:text-start text-end">
            © Anna Mastoridou
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </footer>
  );
};

export default Footer;
