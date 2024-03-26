import { useState } from "react";
import PropTypes from "prop-types";
import { UI_LABELS } from "../app.config";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="flex items-center gap-r">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
        onKeyUp={handleKeyUp}
      />
      <button
        className="text-stone-700 hover:text-stone-950 ml-4"
        onClick={handleClick}
      >
        {UI_LABELS.ADD_TASK}
      </button>
    </div>
  );
};

NewTask.propTypes = {
  onAdd: PropTypes.func,
};

export default NewTask;
