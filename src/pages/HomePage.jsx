import { Fragment, useEffect } from "react";
import BottomNavigationBar from "../components/Fragments/BottomNavigationBar";
import ContentLayout from "../components/Layouts/ContentLayout";
import PopularCategory from "../components/Fragments/PopularCategory";
import Gap from "../components/Elements/Gap";
import Text from "../components/Elements/Text";
import Thread from "../components/Fragments/Thread";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllThreads } from "../actions/threadAction";
import { formatElapsedTime } from "../utils/formatter";
import FloatingButton from "../components/Elements/FloatingButton";
import { Plus } from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";
import { filterThreads } from "../redux/slice/threadSlice";
import { authProfile } from "../actions/authAction";
import { fetchAllUsers } from "../actions/userAction";

import { useURLSearchParams } from "../hooks/useURLSearchParams";

const HomePage = () => {
  const { search } = useLocation();
  const params = useURLSearchParams(search, "category");
  const dispatch = useDispatch();
  const { filteredThreads } = useSelector((state) => state.thread);
  const category = useSelector((state) => state.category);
  const { auth } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (params) {
      dispatch(filterThreads(params));
    } else {
      dispatch(filterThreads(""));
    }
  }, [dispatch, params, category]);

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(authProfile());
    dispatch(fetchAllThreads());
  }, [dispatch]);

  const renderThreads = () => {
    return filteredThreads.length === 0
      ? (
      <Text text={"Tidak ada thread"} />
        )
      : (
          filteredThreads.map((thread) => {
            return (
          <Thread
            key={thread.id}
            id={thread.id}
            category={thread.category}
            title={thread.title}
            body={thread.body}
            date={formatElapsedTime(thread.createdAt)}
            author={
              thread.ownerId && user.length > 0
                ? user.filter((u) => u.id === thread.ownerId)[0].name
                : "Anonymous"
            }
            avatar={
              thread.ownerId && user.length > 0
                ? user.filter((u) => u.id === thread.ownerId)[0].avatar
                : ""
            }
            upVotesBy={thread.upVotesBy}
            downVotesBy={thread.downVotesBy}
            totalComments={thread.totalComments}
          />
            );
          })
        );
  };

  const handleClickCategory = (category) => {
    navigate("/?category=" + category);
    dispatch(filterThreads(category));
  };

  return (
    <Fragment>
      <ContentLayout>
        <PopularCategory
          listCategory={[...new Set(category)]}
          onClick={handleClickCategory}
        />
        <Gap height={30} />
        <Text text={"Discussion Available"} className={"font-bold text-xl"} />
        <Gap height={15} />
        {renderThreads()}
      </ContentLayout>
      <BottomNavigationBar />
      <Toaster />
      {auth && (
        <FloatingButton
          icon={<Plus className="text-white text-xl font-bold" />}
          onClick={() => navigate("/thread/new")}
        />
      )}
    </Fragment>
  );
};

export default HomePage;
