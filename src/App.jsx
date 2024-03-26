import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: "na",
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: "selected",
    }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: "na",
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: "na",
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const deleteHandler = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: "na",
      projects: [
        ...prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      ],
    }));
  };

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks.filter((task) => task.id !== id)],
    }));
  };

  let content;

  if (projectState.selectedProjectId === "selected") {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === "na") {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        selectedProjectId={projectState.selectedProjectId}
        project={projectState.projects.find(
          (project) => project.id === projectState.selectedProjectId
        )}
        onDelete={deleteHandler}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
