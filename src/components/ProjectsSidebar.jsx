import { UI_LABELS } from "../app.config";
import Button from "./Button";
import PropTypes from "prop-types";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  const selectProjectHandler = (projectId) => {
    onSelectProject(projectId);
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        {UI_LABELS.SIDEBAR_HEADING}
      </h2>
      <div>
        <Button onClick={onStartAddProject}>{UI_LABELS.ADD_PROJECT}</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm m-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => selectProjectHandler(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

ProjectSidebar.propTypes = {
  onStartAddProject: PropTypes.func,
  projects: PropTypes.array,
  onSelectProject: PropTypes.func,
  selectedProjectId: PropTypes.any,
};
