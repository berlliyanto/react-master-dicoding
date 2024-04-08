import { createSlice } from "@reduxjs/toolkit";
import Token from "../../utils/token";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: new Token().hasToken(),
    userId: localStorage.getItem("userId") || "",
    name: localStorage.getItem("name") || "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },

    setUserName: (state, action) => {
      localStorage.setItem("name", action.payload);
      state.name = action.payload;
    },

    setUserId: (state, action) => {
      localStorage.setItem("userId", action.payload);
      state.userId = action.payload;
    },

    removeUserName: (state) => {
      localStorage.removeItem("name");
      state.name = "";
    },

    removeUserId: (state) => {
      localStorage.removeItem("userId");
      state.userId = "";
    },
  },
});

export const { setAuth, setUserName, setUserId, removeUserName, removeUserId } = authSlice.actions;
export default authSlice.reducer;
