import PropTypes from "prop-types";

const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-700"
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
