const AboutHero = () => {
  return (
    <div className="pb-10 md:pt-36 pt-36">
      <div className="relative">
        <div className="h-[32rem] mx-auto max-w-4xl flex relative">
          <div className="p-4 z-2 mx-auto max-w-3xl flex flex-col  justify-center">
            <p className=" text-5xl md:text-7xl text-left font-bold">
              Anna <br /> Mastoridou
            </p>
            <p className="mt-2  text-xl md:text-xl text-left font-semibold">
              Some people call me Annasama.
            </p>
            <h2 className="mt-6 text-sm md:text-sm font-light text-gray-400 mb-2">
              WHO IS ANNA ?
            </h2>
            <p className="font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              I&apos;m a frontend developer currently based in Düsseldorf,
              Germany. A marketer turned developer, drawn to building things
              that people actually enjoy using.
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              I&apos;ve always been fascinated by creating something from
              nothing. What started as curiosity for digital experiences quickly
              became a focus on frontend development—where structure,
              performance, and usability come together to shape the experience,
              not just the interface.
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              I currently work as a freelance frontend developer. Previously, I
              worked part-time at Coursfy, building and maintaining production
              user interfaces, and before that as a Tutor at DCI Digital Career
              Institute, where I taught React and JavaScript while training as a
              developer myself.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-6 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default AboutHero;
