import PropTypes from "prop-types";

const IconButton = ({ children, text, onClick }) => {
  return (
    <div onClick={onClick}
    className="flex flex-col justify-between items-center cursor-pointer hover:scale-110 duration-300">
      {children}
      <h4>{text}</h4>
    </div>
  );
};

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
