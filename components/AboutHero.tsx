

const AboutHero = () => {
  return (
    <div className="pb-10 md:pt-36 pt-36">
      <div className="relative">
        <div className="h-[44rem] md:h-[32rem] mx-auto max-w-4xl flex relative">
          <div className="p-4 z-2 mx-auto max-w-3xl flex flex-col  justify-center">
            <p className="font-semibold text-5xl md:text-7xl text-left">
              Anna <br /> Mastoridou
            </p>
            <p className="mt-2 font-normal text-xl md:text-xl  text-left">
              Some people call me Annasama.
            </p>
            <h2 className="mt-6 text-sm md:text-sm font-light text-gray-400 mb-2">
              WHO IS ANNA ?
            </h2>
            <p className="font-normal text-sm md:text-md text-gray-300">
              {" "}
              I&apos;m a full-stack developer in Düsseldorf, Germany, who
              swapped marketing for coding. Marketing taught me how to
              captivate, but development lets me build the magic. Now, I create
              websites that make you wonder—how did I live without this?{" "}
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md text-gray-300">
              {" "}
              For a long time, I was fascinated by the idea of creating
              something from nothing—building digital experiences that are as
              intuitive as they are functional. This passion led me to
              full-stack development, where I blend creativity and technical
              skills to craft impactful applications.
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md text-gray-300">
              {" "}
              I recently interned at Coursfy, building dynamic web apps. Before
              that, I refined my front-end and UI/UX skills at Rotoy ApS and
              tutored future developers at DCI Digital Career Institute. Now,
              I&apos;m on the lookout for my next challenge in web development.{" "}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>
      </div>
    </div>
  );
};

export default AboutHero;
