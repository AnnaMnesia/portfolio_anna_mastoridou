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
              I&apos;m a full-stack developer and hands-on problem-solver who
              combines strong technical expertise with a practical, real-world
              approach to building software. With experience across startups,
              client projects, and product teams, I bring a solid understanding
              of how modern web applications are designed, developed, and scaled
              in professional environments.
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              Specializing in frontend and full-stack development, I focus on
              creating clean, reliable, and user-centered solutions. My skills
              shine particularly in startup environments, where I&apos;ve worked
              closely with development teams and contributed to guiding products
              from concept to market.
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              I&apos;m at my best when tackling complex challenges, drawing on both
              technical knowledge and creative thinking to turn ideas into
              impactful solutions.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-6 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default AboutHero;
