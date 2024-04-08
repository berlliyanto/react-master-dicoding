import Divider from "../Elements/Divider";
import Text from "../Elements/Text";
import ThreadActivity from "../Elements/ThreadActivity";
import UserAvatar from "../Elements/UserAvatar";
import ReactHtmlParser from "react-html-parser";
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  downVoteComment,
  neutralizeVoteComment,
  upVoteComment,
} from "../../actions/voteAction";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Comment = ({
  commentId,
  name,
  avatar = "",
  body,
  date,
  upVotesBy,
  downVotesBy,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userId, auth } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between w-full">
        <UserAvatar name={name} avatar={avatar} />
        <Text text={date} fontSize={"14px"} />
      </div>
      {ReactHtmlParser(body)}
      <div className="flex gap-3">
        <ThreadActivity
          icon={
            <ThumbsUp
              onClick={() => {
                if (!auth) {
                  toast.error("Anda harus login terlebih dahulu");
                  return;
                }
                if (upVotesBy.includes(userId)) {
                  dispatch(neutralizeVoteComment({ threadId: id, commentId }));
                } else {
                  dispatch(upVoteComment({ threadId: id, commentId }));
                }
              }}
              weight={upVotesBy.includes(userId) ? "fill" : "regular"}
              className={
                (upVotesBy.includes(userId) ? "text-blue-500" : "") +
                "cursor-pointer"
              }
            />
          }
          text={upVotesBy.length.toString()}
        />
        <ThreadActivity
          icon={
            <ThumbsDown
              onClick={() => {
                if (!auth) {
                  toast.error("Anda harus login terlebih dahulu");
                  return;
                }

                if (downVotesBy.includes(userId)) {
                  dispatch(neutralizeVoteComment({ threadId: id, commentId }));
                } else {
                  dispatch(downVoteComment({ threadId: id, commentId }));
                }
              }}
              weight={downVotesBy.includes(userId) ? "fill" : "regular"}
              className={
                (downVotesBy.includes(userId) ? "text-blue-500" : "") +
                "cursor-pointer"
              }
            />
          }
          text={downVotesBy.length.toString()}
        />
      </div>
      <Divider />
    </div>
  );
};

Comment.propTypes = {
  commentId: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string,
  body: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  upVotesBy: propTypes.array,
  downVotesBy: propTypes.array,
};

export default Comment;
