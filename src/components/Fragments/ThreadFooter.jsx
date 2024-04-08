import Text from "../Elements/Text";
import ThreadActivity from "../Elements/ThreadActivity";
import { ThumbsUp, ThumbsDown, ShareFat } from "@phosphor-icons/react";
import propTypes from "prop-types";
import UserAvatar from "../Elements/UserAvatar";
import { useSelector, useDispatch } from "react-redux";
import {
  downVoteThread,
  neutralizeVoteThread,
  upVoteThread,
} from "../../actions/voteAction";
import toast from "react-hot-toast";

const ThreadFooter = ({
  upVotesBy,
  downVotesBy,
  totalComments = 0,
  date = "",
  author = "",
  avatar = null,
  threadId,
}) => {
  const { userId, auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <ThreadActivity
        icon={
          <ThumbsUp
            onClick={() => {
              if (!auth) {
                toast.error("Anda harus login terlebih dahulu");
                return;
              }
              if (upVotesBy.includes(userId)) {
                dispatch(neutralizeVoteThread(threadId));
              } else {
                dispatch(upVoteThread(threadId));
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
                dispatch(neutralizeVoteThread(threadId));
              } else {
                dispatch(downVoteThread(threadId));
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
      <ThreadActivity icon={<ShareFat />} text={totalComments.toString()} />
      <Text text={date} fontSize={"14px"} />
      <div className="flex gap-1 items-center text-slate-800 font-sans text-[14px]">
        <p>Posted By</p>
        <UserAvatar name={author} avatar={avatar} textClassName="font-bold" />
      </div>
    </div>
  );
};

ThreadFooter.propTypes = {
  threadId: propTypes.string.isRequired,
  upVotesBy: propTypes.array.isRequired,
  downVotesBy: propTypes.array.isRequired,
  totalComments: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  avatar: propTypes.any,
};

export default ThreadFooter;
