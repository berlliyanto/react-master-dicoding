import { createSlice } from "@reduxjs/toolkit";

const detailThreadSlice = createSlice({
  name: "detailThread",
  initialState: {},
  reducers: {
    setDetailThread: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDetailThread } = detailThreadSlice.actions;
export default detailThreadSlice.reducer;
