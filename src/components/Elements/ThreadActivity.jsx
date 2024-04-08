import propTypes from "prop-types";
import Text from "./Text";

const ThreadActivity = ({ icon, text }) => {
  return (
    <div className="flex gap-1 items-center hover:text-blue-600 duration-300">
      {icon}
      <Text text={text} fontSize={"14px"} />
    </div>
  );
};

ThreadActivity.propTypes = {
  icon: propTypes.element.isRequired,
  text: propTypes.string.isRequired,
};

export default ThreadActivity;
