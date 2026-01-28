import { ProblemGifCards } from "../ui/ProblemGifCards";

type ProjectProblemProps = {
  project: {
    section2?: {
      heading: string;
      subHeading: string;
      content: string;
      bullets?: string[];
      subContent?: string;
    };
  };
};
const ProjectProblem = ({ project }: ProjectProblemProps) => {
  if (!project.section2) {
    return null;
  }

  return (
    <div className="relative pt-5 pb-10">
      <div className="relative">
        <div className="absolute top-1 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>

        <div className="relative p-4 mx-auto max-w-4xl">
          <h2 className="mt-4 text-xs font-light text-gray-400 mb-2">
            {project.section2.heading}
          </h2>
          <h2 className="mt-4 text-xs font-semibold">
            {project.section2.subHeading}
          </h2>
          <p className="font-normal text-sm md:text-md dark:text-gray-300 mt-4">
            {project.section2.content}
          </p>
          {project.section2.bullets && (
            <ul className="mt-2 list-disc pl-4 space-y-1">
              {project.section2.bullets.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex gap-5 items-center">
            <ProblemGifCards />
            <div className="flex-col">
              <p className="font-semibold text-sm md:text-md dark:text-gray-300">
                My main goals were to:
              </p>
              {project.section2.bullets && (
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  {project.section2.bullets.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {project.section2.subContent && (
                <p className="font-normal text-sm md:text-md dark:text-gray-300 mt-4">
                  {project.section2.subContent}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default ProjectProblem;
