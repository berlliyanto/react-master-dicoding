import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import CommentService from "../services/commentService";

export const postComment = createAsyncThunk(
  "comment/store",
  async ({ id, comment }, { dispatch }) => {
    dispatch(showLoading());
    const commentService = new CommentService();
    const { status } = await commentService.storeComment({
      id,
      content: comment,
    });
    if (status === 200 || status === 201) {
      window.location.reload();
    }
    dispatch(hideLoading());
  },
);
