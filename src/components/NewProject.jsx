import Input from "./Input";
import { useRef } from "react";
import PropTypes from "prop-types";
import { UI_LABELS } from "../app.config";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          {UI_LABELS.INVALID_INPUT}
        </h2>
        <p className="text-stone-600 mb-4">{UI_LABELS.ERROR_MSG}</p>
        <p className="text-stone-600 mb-4">{UI_LABELS.ERROR_WARN}</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type="text" ref={title} label={UI_LABELS.TITLE} />
          <Input ref={description} label={UI_LABELS.DESC} textArea />
          <Input type="date" ref={dueDate} label={UI_LABELS.DUE_DATE} />
        </div>
        <menu className="flex items-center justify-center gap-4 my-12">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              {UI_LABELS.CANCEl}
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              {UI_LABELS.SAVE}
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}

NewProject.propTypes = {
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};
