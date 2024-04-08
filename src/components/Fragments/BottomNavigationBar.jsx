import { Chats, ChartBar, SignIn } from "@phosphor-icons/react";
import IconButton from "../Elements/IconButton";
import { useNavigate } from "react-router-dom";
import Token from "../../utils/token";
import { useSelector, useDispatch } from "react-redux";
import { removeUserId, removeUserName, setAuth } from "../../redux/slice/authSlice";

const BottomNavigationBar = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const iconButtonList = [
    {
      icon: <Chats className="text-3xl" />,
      text: "Threads",
      routes: "/",
    },
    {
      icon: <ChartBar className="text-3xl" />,
      text: "LeaderBoard",
      routes: "/leaderboards",
    },
    {
      icon: <SignIn className="text-3xl" />,
      text: auth ? "Logout" : "Login",
      routes: "/login",
    },
  ];

  const renderIconButton = () => {
    return iconButtonList.map(({ icon, text, routes }) => {
      return (
        <IconButton
          key={text}
          text={text}
          onClick={() => {
            if (text === "Logout" && auth) {
              logout();
            } else {
              navigate(routes);
            }
          }}
        >
          {icon}
        </IconButton>
      );
    });
  };

  const logout = () => {
    new Token().removeFromStorage();
    dispatch(removeUserId());
    dispatch(setAuth(false));
    dispatch(removeUserName());
    window.location.reload();
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 bg-white flex justify-center items-center gap-10 border-t-2">
      {renderIconButton()}
    </footer>
  );
};
export default BottomNavigationBar;
