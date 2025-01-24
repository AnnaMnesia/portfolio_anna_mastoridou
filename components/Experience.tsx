import React from "react";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="pt-10 pb-10">
      <div className="relative pb-10">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <div className="relative mx-auto max-w-4xl">
          <h3 className="text-sm md:text-lg font-light tracking-widest text-gray-400 mb-2">
            WHERE I HAVE PUT IN VALUE
          </h3>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            My experience so far
          </h2>
        </div>
        <div className="absolute top-24 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>

        <div className="grid gap-4 py-5  mx-auto max-w-4xl ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col justify-between items-start "
            >
              <p className="text-sm text-gray-400 min-w-[150px]">
                {exp.period}
              </p>

              <div className="flex md:flex-row flex-col md:items-center gap-2">
                <p className="text-sm font-medium">{exp.role}</p>
                <div className='flex gap-1 md:items-center '>
                  <p className="text-md text-gray-400">at</p>
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="h-4" />
                  )}
                  <p className="text-sm ">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
      </div>
    </section>
  );
};

export default Experience;
