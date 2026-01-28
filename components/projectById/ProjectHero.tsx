import { CardBigProject } from "../ui/CardBigProject";

type ProjectHeroProps = {
  project: {
    id: number;
    title: string;
    name: string;
    year: string;
    src: string;
    cover: string;

    overview: {
      role: string;
      summary: string;
      summary1?: string;
    };

    demoUrl: string;
  };
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <div className="pb-10 md:pt-36 pt-36">
      <div className="relative">
        <div className="mx-auto max-w-4xl flex relative">
          <div className="p-4 z-2 w-full mx-auto max-w-4xl flex flex-col  justify-center">
            <p className="text-sm text-left text-gray-400">
              {project.name}
              <span className="text-gray-300"> • </span>
              {project.year}
            </p>
            <p className="mt-2 text-xl md:text-2xl text-left font-semibold">
              {project.title}
            </p>
            <div className="mt-6">
              <CardBigProject project={project} />
            </div>
            <h2 className="mt-6 text-xs font-light text-gray-400 mb-2">
              PROJECT SUMMARY
            </h2>
            <p className="font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              {project.overview.summary}
            </p>{" "}
            <p className="mt-2 font-normal text-sm md:text-md dark:text-gray-300">
              {" "}
              {project.overview.summary1}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-4 w-full h-[1.5px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
};

export default ProjectHero;
