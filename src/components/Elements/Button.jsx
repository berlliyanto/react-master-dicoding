import propTypes from "prop-types";

const Button = ({ text, onClick, id = "button" }) => {
  return (
    <button
      id={id}
      className="w-full bg-cyan-700 text-white p-2 rounded-md hover:bg-cyan-800 duration-300 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
