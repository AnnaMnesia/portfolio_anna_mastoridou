import Image from "next/image";
import { ProblemGifCards } from "../ui/ProblemGifCards";

type ProjectStackProps = {
  project: {
    section3?: {
      heading: string;
      subHeading: string;
      content: string;
      imageStack: string;
      imageDesc: string;
    };
  };
};
const ProjectStack = ({ project }: ProjectStackProps) => {
  if (!project.section3) {
    return null;
  }

  return (
    <div className="relative pt-5 pb-10">
      <div className="relative">
        <div className="absolute top-1 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>

        <div className="relative p-4 mx-auto max-w-4xl">
          <h2 className="mt-4 text-sm font-light text-gray-400 mb-2">
            {project.section3.heading}
          </h2>
          <h2 className="mt-4 text-sm font-semibold">
            {project.section3.subHeading}
          </h2>
          <p className="font-normal text-sm md:text-md text-gray-700 dark:text-gray-300 mt-4">
            {project.section3.content}
          </p>
          <div className="mt-6 items-center">
            <Image
              src={project.section3.imageStack}
              alt={project.section3.imageDesc}
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="absolute -bottom-4 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        
      </div>
    </div>
  );
};

export default ProjectStack;
