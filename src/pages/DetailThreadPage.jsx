import { Fragment, useEffect } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import BottomNavigationBar from "../components/Fragments/BottomNavigationBar";
import Text from "../components/Elements/Text";
import { useParams, Link } from "react-router-dom";
import Tag from "../components/Elements/Tag";
import Gap from "../components/Elements/Gap";
import ReactHtmlParser from "react-html-parser";
import ThreadFooter from "../components/Fragments/ThreadFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailThread } from "../actions/threadAction";
import { formatDate, formatElapsedTime } from "../utils/formatter";
import CommentForm from "../components/Fragments/CommentForm";
import Comment from "../components/Fragments/Comment";
import toast from "react-hot-toast";
import { postComment } from "../actions/commentAction";

const DetailThreadPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailThread = useSelector((state) => state.detailThread);
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchDetailThread(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.comment.value == null || e.target.comment.value === "") {
      toast.error("Tidak ada komentar yang diinputkan");
      return;
    }

    const postCommentData = {
      id,
      comment: e.target.comment.value,
    };

    dispatch(postComment(postCommentData));
  };

  const renderAddComment = () => {
    if (!auth) {
      return (
        <p>
          Login untuk berkomentar,{" "}
          <Link
            to={"/login"}
            className="text-blue-500 hover:text-blue-600 duration-300"
          >
            Login
          </Link>
        </p>
      );
    }

    return (
      <Fragment>
        <Gap height={10} />
        <Text text="Beri Komentar" className={"font-bold"} />
        <Gap height={10} />
        <CommentForm onSubmit={handleSubmit} />
      </Fragment>
    );
  };

  const renderComments = () => {
    if (detailThread.comments && detailThread.comments.length > 0) {
      return detailThread.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentId={comment.id}
            name={comment.owner ? comment.owner.name : ""}
            avatar={comment.owner ? comment.owner.avatar : ""}
            body={comment.content}
            date={formatElapsedTime(comment.createdAt)}
            upVotesBy={comment.upVotesBy || []}
            downVotesBy={comment.downVotesBy || []}
          />
        );
      });
    }
  };

  return (
    <Fragment>
      <ContentLayout>
        <Tag text={detailThread.category || ""} />
        <Gap height={10} />
        <Text
          text={detailThread.title || "-"}
          fontSize={"2.7rem"}
          className={"font-bold"}
        />
        <Gap height={20} />
        {ReactHtmlParser(detailThread.body)}
        <Gap height={10} />
        <ThreadFooter
          threadId={id.toString()}
          upVotesBy={detailThread.upVotesBy || []}
          downVotesBy={detailThread.downVotesBy || []}
          totalComments={
            detailThread.comments ? detailThread.comments.length : 0
          }
          author={detailThread.owner ? detailThread.owner.name : ""}
          date={formatDate(detailThread.createdAt)}
          avatar={detailThread.owner ? detailThread.owner.avatar : ""}
        />
        <Gap height={10} />
        {renderAddComment()}
        <Gap height={25} />
        <Text
          text={`Comments (${
            detailThread.comments ? detailThread.comments.length : 0
          })`}
          className={"font-bold"}
        />
        <Gap height={10} />
        {renderComments()}
      </ContentLayout>
      <BottomNavigationBar />
    </Fragment>
  );
};

export default DetailThreadPage;
