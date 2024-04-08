import PropTypes from "prop-types";
import Gap from "../Elements/Gap";

const ContentLayout = ({ children }) => {
  return (
    <main className="bg-white mx-80 p-5 shadow-md">
      {children} <Gap height={100} />
    </main>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
