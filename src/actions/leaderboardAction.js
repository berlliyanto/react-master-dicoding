import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setLeaderboard } from "../redux/slice/leaderboardSlice";
import LeaderboardService from "../services/leaderboardService";

export const fetchAllLeaderboards = createAsyncThunk(
  "leaderboard/index",
  async (_, { dispatch }) => {
    dispatch(showLoading());
    const leaderboardService = new LeaderboardService();
    const { data, status } = await leaderboardService.indexLeaderboards();
    if (status === 200 || status === 201) {
      dispatch(setLeaderboard(data));
    }
    dispatch(hideLoading());
  },
);
