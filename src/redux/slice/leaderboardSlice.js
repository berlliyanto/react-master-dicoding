import { createSlice } from "@reduxjs/toolkit";

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState: [],
  reducers: {
    setLeaderboard: (state, action) => {
      return action.payload.data.leaderboards;
    },
  },
});

export const { setLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
