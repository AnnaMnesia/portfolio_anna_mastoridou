import Image from "next/image";
import { motion } from "framer-motion";
type ProjectImpactProps = {
  project: {
    section4?: {
      heading: string;
      subHeadingImpact: string;
      bulletsImpact?: string[];
      subHeadingLearn: string;
      bulletsLearn: string[];
      content: string;
      impactGif: string;
    };
  };
};
const ProjectImpact = ({ project }: ProjectImpactProps) => {
  if (!project.section4) {
    return null;
  }

  return (
    <div className="relative pt-5 pb-10">
      <div className="relative">
        <div className="absolute top-1 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>

        <div className="relative p-4 mx-auto max-w-4xl">
          <h2 className="mt-4 text-sm font-light text-gray-400 mb-2">
            {project.section4.heading}
          </h2>
          <div className="md:flex gap-4 mt-6">
            {/* Impact Gif  */}
            <div className="flex justify-center">
              <motion.div
                className="
          w-[325px] h-[305px]
          rounded-xl p-1
          bg-white dark:bg-neutral-800
          border border-neutral-100 dark:border-neutral-700
          shadow-lg
          overflow-hidden
        "
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={project.section4.impactGif}
                    alt="GIF"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-5 md:mt-0 flex flex-col gap-4 justify-center">
              <div>
                <h2 className="text-sm font-semibold">
                  {project.section4.subHeadingImpact}
                </h2>
                {project.section4.bulletsImpact && (
                  <ul className="mt-2 list-disc pl-4 space-y-1">
                    {project.section4.bulletsImpact.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  {project.section4.subHeadingLearn}
                </h2>
                {project.section4.bulletsLearn && (
                  <ul className="mt-2 list-disc pl-4 space-y-1">
                    {project.section4.bulletsLearn.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <p className="font-normal text-sm md:text-md text-gray-700 dark:text-gray-300 mt-4">
            {project.section4.content}
          </p>
        </div>

        <div className="absolute -bottom-4 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default ProjectImpact;
