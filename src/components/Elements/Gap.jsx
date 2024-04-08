import propTypes from "prop-types";

const Gap = ({ height }) => {
  return <div style={{ height }} />;
};

Gap.propTypes = {
  height: propTypes.number.isRequired,
};

export default Gap;
