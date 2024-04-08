import propTypes from "prop-types";
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ name, avatar = null, radius = 25, textClassName = "" }) => {
  const renderAvatar = () => {
    if (avatar) {
      return (
        <Avatar alt={name} src={avatar} style={{ width: radius, height: radius }} />
      );
    }
  };
  return (
    <div className="flex gap-1 items-center">
      {renderAvatar()}
      <p className={textClassName}>{name}</p>
    </div>
  );
};

UserAvatar.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string,
  radius: propTypes.number,
  textClassName: propTypes.string,
};

export default UserAvatar;
