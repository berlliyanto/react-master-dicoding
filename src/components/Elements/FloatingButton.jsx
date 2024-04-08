import propTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

const FloatingButton = ({ icon, onClick }) => {
  return (
    <Tooltip title="New Thread">
      <button
        onClick={onClick}
        className="fixed bottom-20 right-8 p-3 bg-cyan-800 text-white rounded-full shadow-lg shadow-cyan-500/10"
      >
        {icon}
      </button>
    </Tooltip>
  );
};

FloatingButton.propTypes = {
  icon: propTypes.node,
  onClick: propTypes.func,
};

export default FloatingButton;
