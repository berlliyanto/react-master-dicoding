import { createSlice } from "@reduxjs/toolkit";

const threadSlice = createSlice({
  name: "thread",
  initialState: {
    threads: [],
    filteredThreads: [],
  },
  reducers: {
    setThreads: (state, action) => {
      state.threads = action.payload;
      state.filteredThreads = action.payload;
    },

    filterThreads: (state, action) => {
      const category = action.payload;
      if (category) {
        state.filteredThreads = state.threads.filter(
          (thread) => thread.category === category,
        );
      } else {
        state.filteredThreads = state.threads;
      }
    },
  },
});

export const { setThreads, filterThreads } = threadSlice.actions;
export default threadSlice.reducer;
