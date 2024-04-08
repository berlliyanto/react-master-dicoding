import propTypes from "prop-types";
import Chip from '@mui/material/Chip';

const Tag = ({ text, onClick, fontSize = "12px" }) => {
  return (
    <Chip label={`#${text}`} onClick={onClick} variant="outlined" className="w-fit" style={{ fontSize }} />
  );
};

Tag.propTypes = {
  text: propTypes.string.isRequired,
  fontSize: propTypes.string,
  onClick: propTypes.func,
};

export default Tag;
