import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import VoteService from "../services/voteService";
import { fetchAllThreads, fetchDetailThread } from "./threadAction";

export const upVoteThread = createAsyncThunk(
  "vote/upVoteThread",
  async (id, { dispatch }) => {
    dispatch(showLoading());
    const voteService = new VoteService();
    const { status } = await voteService.upVoteThread({ id });
    if (status === 200 || status === 201) {
      dispatch(fetchAllThreads());
      dispatch(fetchDetailThread(id));
    }
    dispatch(hideLoading());
  },
);

export const downVoteThread = createAsyncThunk(
  "thread/downVoteThread",
  async (id, { dispatch }) => {
    const voteService = new VoteService();
    const { status } = await voteService.downVoteThread({ id });
    if (status === 200 || status === 201) {
      dispatch(fetchAllThreads());
      dispatch(fetchDetailThread(id));
    }
  },
);

export const neutralizeVoteThread = createAsyncThunk(
  "thread/neutralVoteThread",
  async (id, { dispatch }) => {
    dispatch(showLoading());
    const voteService = new VoteService();
    const { data, status } = await voteService.neutralizeVoteThread({ id });
    console.log(data);
    if (status === 200 || status === 201) {
      dispatch(fetchAllThreads());
      dispatch(fetchDetailThread(id));
    }
    dispatch(hideLoading());
  },
);

export const upVoteComment = createAsyncThunk(
  "vote/upVoteComment",
  async ({ threadId, commentId }, { dispatch }) => {
    dispatch(showLoading());
    const voteService = new VoteService();
    const { status } = await voteService.upVoteComment({
      threadId,
      commentId,
    });
    if (status === 200 || status === 201) {
      dispatch(fetchDetailThread(threadId));
    }
    dispatch(hideLoading());
  },
);

export const downVoteComment = createAsyncThunk(
  "thread/downVoteComment",
  async ({ threadId, commentId }, { dispatch }) => {
    const voteService = new VoteService();
    const { status } = await voteService.downVoteComment({
      threadId,
      commentId,
    });
    if (status === 200 || status === 201) {
      dispatch(fetchDetailThread(threadId));
    }
  },
);

export const neutralizeVoteComment = createAsyncThunk(
  "thread/neutralVoteComment",
  async ({ threadId, commentId }, { dispatch }) => {
    dispatch(showLoading());
    const voteService = new VoteService();
    const { status } = await voteService.neutralizeVoteComment({
      threadId,
      commentId,
    });
    if (status === 200 || status === 201) {
      dispatch(fetchDetailThread(threadId));
    }
    dispatch(hideLoading());
  },
);
