import { useSelector } from "react-redux";
import Text from "../Elements/Text";

const Header = () => {
  const { name } = useSelector((state) => state.auth);
  return (
    <header className="px-12 flex justify-between items-center w-full h-16 bg-cyan-900">
      <Text
        text="Dicoding Forum App"
        className={" text-white font-bold"}
        fontSize={"24px"}
      />
      <Text text={name || ""} className={"text-white"} fontSize={"20px"} />
    </header>
  );
};

export default Header;
