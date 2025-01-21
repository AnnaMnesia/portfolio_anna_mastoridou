import { FocusCards } from "@/components/ui/FocusCards";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div id="projects" className="relative">
      <div>
        <h2 className="text-xl text-purple">MY CRAFT</h2>
        <h2 className="text-4xl font-bold">Projects.</h2>
      </div>
        <FocusCards projects={projects} />
    </div>
  );
};

export default Projects;
