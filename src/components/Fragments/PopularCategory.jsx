import propTypes from "prop-types";
import Tag from "../Elements/Tag";
import Text from "../Elements/Text";
import { useURLSearchParams } from "../../hooks/useURLSearchParams";
import { useLocation } from "react-router-dom";

const PopularCategory = ({ listCategory, onClick }) => {
  const { search } = useLocation();
  const category = useURLSearchParams(search, "category");

  const renderCategory = () => {
    return listCategory.length === 0
      ? (
      <Text text={"-"} className={"font-bold text-xl"} />
        )
      : (
          listCategory.map((item, index) => (
        <Tag
          key={index}
          text={item}
          onClick={() => onClick(item)}
          className={`${item === category ? "bg-blue-200" : ""}`}
        />
          ))
        );
  };

  return (
    <div>
      <Text text={"Popular Category"} className={"font-normal text-lg"} />
      <div className="flex gap-2 mt-1">{renderCategory()}</div>
    </div>
  );
};

PopularCategory.propTypes = {
  listCategory: propTypes.array.isRequired,
  onClick: propTypes.func,
};

export default PopularCategory;
