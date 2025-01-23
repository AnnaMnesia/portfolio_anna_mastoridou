import { socialMedia } from "@/data";
import { GifCard } from "./ui/GifCard";

const Footer = () => {
  const gifIndex = 5;
  return (
    <footer id="contact" className="pt-5 pb-24">
      <div className="relative">
        <div className="absolute top-0 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <div className="mx-auto max-w-4xl py-10">
          <div className="flex flex-col max-w-4xl md:items-end tems-start ">
            <GifCard index={gifIndex} />
            <h1 className="text-md md:text-lg font-light text-gray-400">
              STEP FORWARD AND CONTACT ME{" "}
              <span className="text-gray-400 ">today</span>
            </h1>
            <a
              href="mailto:mastoridouanna@icloud.com"
              className="hover:underline max-w-2xl md:text-end text-start text-xl md:text-3xl hover:text-gray-400"
            >
              Let’s craft something with precision and purpose.
              mastoridouanna@icloud.com
            </a>
          </div>
          <div className="flex mt-10 md:flex-row flex-col justify-between md:items-end tems-start gap-4 pb-5">
            <p className="text-base md:font-normal font-light">
              OR find me forging my craft, one line of code at a time.
            </p>

            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a // Wrap each social media info in an anchor tag 'a'
                  key={info.id}
                  href={info.link} // Set the href attribute to the link URL
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Security best practices
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
        <div className="absolute bottom-0 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
      </div>
    </footer>
  );
};

export default Footer;
