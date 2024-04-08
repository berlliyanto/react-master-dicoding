import propTypes from "prop-types";
import Text from "./Text";
import UserAvatar from "./UserAvatar";

const Tile = ({ name, score, avatar }) => {
  return (
    <div className="flex justify-between items-center bg-transparent pb-5">
      <UserAvatar name={name} avatar={avatar} />
      <Text text={score.toString()} fontSize={"18px"} />
    </div>
  );
};

Tile.propTypes = {
  name: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  avatar: propTypes.string,
};

export default Tile;
