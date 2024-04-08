import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import tokenReducer from "./slice/tokenSlice";
import threadReducer from "./slice/threadSlice";
import leaderboardReducer from "./slice/leaderboardSlice";
import detailThreadReducer from "./slice/detailThreadSlice";
import authReducer from "./slice/authSlice";
import categoryReducer from "./slice/categorySlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    loadingBar: loadingBarReducer,
    thread: threadReducer,
    leaderboard: leaderboardReducer,
    detailThread: detailThreadReducer,
    category: categoryReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
