import propTypes from "prop-types";
import Tag from "../Elements/Tag";
import Divider from "../Elements/Divider";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ThreadFooter from "./ThreadFooter";

const Thread = ({
  id,
  category,
  title,
  body,
  upVotesBy = [],
  downVotesBy = [],
  totalComments = 0,
  date,
  author,
  avatar = null,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Tag text={category} fontSize={"12px"} onClick={() => {}} />
      <Link
        to={`/thread/${id}`}
        className="text-blue-500 font-semibold text-xl hover:text-blue-800 duration-300 visited:text-purple-800"
      >
        {title}
      </Link>
      {ReactHtmlParser(body)}
      <ThreadFooter
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        totalComments={totalComments}
        date={date}
        author={author}
        threadId={id.toString()}
        avatar={avatar}
      />
      <Divider margin={10} />
    </div>
  );
};

Thread.propTypes = {
  id: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  upVotesBy: propTypes.array.isRequired,
  downVotesBy: propTypes.array.isRequired,
  totalComments: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  avatar: propTypes.any,
};

export default Thread;
