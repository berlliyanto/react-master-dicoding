import propTypes from "prop-types";
import {Divider as MUIDivider} from '@mui/material';


const Divider = ({ margin = 5 }) => {
  return (
    <MUIDivider
      orientation="horizontal"
      className="w-full bg-slate-300 h-[1px]"
      style={{ marginTop: margin, marginBottom: margin }}
    />
  );
};

Divider.propTypes = {
  margin: propTypes.number,
};

export default Divider;
