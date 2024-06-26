import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategory: (state, action) => {
      const data = action.payload;
      return data.map((data) => data.category);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
