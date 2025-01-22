import { FocusCards } from "@/components/ui/FocusCards";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div id="projects" className="relative">
      <div className="relative">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <div id="projects" className="relative  mx-auto max-w-4xl">
          <h2 className="text-lg font-light text-gray-400">MY CRAFT</h2>
          <h2 className="text-4xl font-bold">Projects.</h2>
        </div>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>
      </div>
      <div id="projects" className="relative  mx-auto max-w-4xl">
        <FocusCards projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
