import propTypes from "prop-types";

const Text = ({ text, className, fontSize }) => {
  return (
    <p
      className={`text-slate-800 text-base font-sans leading-tight ${className}`}
      style={{ fontSize }}
    >
      {text}
    </p>
  );
};

Text.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string,
  fontSize: propTypes.string,
};

export default Text;
