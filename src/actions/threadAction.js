import { createAsyncThunk } from "@reduxjs/toolkit";
import ThreadService from "../services/threadService";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setThreads } from "../redux/slice/threadSlice";
import { setDetailThread } from "../redux/slice/detailThreadSlice";
import { setCategory } from "../redux/slice/categorySlice";

export const fetchAllThreads = createAsyncThunk(
  "thread/index",
  async (_, { dispatch }) => {
    dispatch(showLoading());
    const threadService = new ThreadService();
    const { data, status } = await threadService.indexThreads({});
    if (status === 200 || status === 201) {
      dispatch(setCategory(data.data.threads));
      dispatch(setThreads(data.data.threads));
    }
    dispatch(hideLoading());
  },
);

export const fetchDetailThread = createAsyncThunk(
  "thread/show",
  async (id, { dispatch }) => {
    const threadService = new ThreadService();
    const { data, status } = await threadService.showThread({ id });
    if (status === 200 || status === 201) {
      dispatch(setDetailThread(data.data.detailThread));
    }
  },
);

export const postThread = createAsyncThunk(
  "thread/store",
  async (threadData, { dispatch }) => {
    console.log(threadData);
    dispatch(showLoading());
    const threadService = new ThreadService();
    const { data, status } = await threadService.storeThread({
      data: threadData,
    });
    if (status === 200 || status === 201) {
      window.location.href = "/";
    }
    dispatch(hideLoading());
  },
);
