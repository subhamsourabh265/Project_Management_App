import { UI_LABELS } from "../app.config";
import noProjectImage from "../assets/no-project.png";
import Button from "./Button";
import PropTypes from "prop-types";

const NoProjectSelected = ({ onStartAddProject }) => (
  <div className="mt-24 text-center w-2/3 ">
    <img
      src={noProjectImage}
      alt="No Project Symbol"
      className="w-16 h-16object-contain mx-auto"
    />
    <h2 className="text-xl font-bold text-stone-500 my-4">
      {UI_LABELS.NO_PROJECT_HEADING}
    </h2>
    <p className="text-stone-400 mb-4">{UI_LABELS.NO_PROJECT_DESC}</p>
    <p className="mt-8">
      <Button onClick={onStartAddProject}>{UI_LABELS.NO_PROJECT_BTN}</Button>
    </p>
  </div>
);

NoProjectSelected.propTypes = {
  onStartAddProject: PropTypes.func,
};

export default NoProjectSelected;
