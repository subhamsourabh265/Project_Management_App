import { UI_LABELS } from "../app.config";
import NewTask from "./NewTask";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onAdd, onDelete, projectId }) => {
  const selectedProjectTasks = tasks.filter(
    (task) => task.projectId === projectId
  );
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {!selectedProjectTasks.length && (
        <p className="text-stone-800 my-4">{UI_LABELS.NO_TASK}</p>
      )}
      {!!selectedProjectTasks.length && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {selectedProjectTasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  {UI_LABELS.CLEAR}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  projectId: PropTypes.any,
};

export default Tasks;
