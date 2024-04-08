import { createSlice } from "@reduxjs/toolkit";
import Token from "../../utils/token";

const tokenSlice = createSlice({
  name: "token",
  initialState: new Token().getFromStorage(),
  reducers: {
    setToken: (state, action) => {
      new Token().saveToStorage(action.payload);
      return action.payload;
    },

    removeToken: (state) => {
      new Token().removeFromStorage();
      return "";
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
