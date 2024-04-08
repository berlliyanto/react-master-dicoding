import { Fragment, useEffect } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import BottomNavigationBar from "../components/Fragments/BottomNavigationBar";
import Text from "../components/Elements/Text";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLeaderboards } from "../actions/leaderboardAction";
import Gap from "../components/Elements/Gap";
import Tile from "../components/Elements/Tile";
import Divider from "../components/Elements/Divider";

const LeaderboardPage = () => {
  const dispatch = useDispatch();
  const leaderboard = useSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(fetchAllLeaderboards());
  }, [dispatch]);

  const renderLeaderboards = () => {
    return leaderboard.length === 0
      ? (
      <Text text="Leaderboard Kosong" />
        )
      : (
          leaderboard.map((leaderboard, index) => {
            return (
          <Tile
            key={leaderboard.user.id}
            name={leaderboard.user.name}
            score={leaderboard.score}
            avatar={leaderboard.user.avatar}
          />
            );
          })
        );
  };

  return (
    <Fragment>
      <ContentLayout>
        <Text
          text="Klasemen Pengguna Aktif"
          fontSize={"22px"}
          className={"font-bold"}
        />
        <Gap height={10} />
        <div className="flex items-center justify-between">
          <Text text="Pengguna" />
          <Text text="Score" />
        </div>
        <Divider margin={10} />
        {renderLeaderboards()}
      </ContentLayout>
      <BottomNavigationBar />
    </Fragment>
  );
};

export default LeaderboardPage;
