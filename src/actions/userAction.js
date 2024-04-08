import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import UserService from "../services/userService";
import { setUsers } from "../redux/slice/userSlice";

export const fetchAllUsers = createAsyncThunk(
  "users/index",
  async (_, { dispatch }) => {
    dispatch(showLoading());
    const userService = new UserService();
    const { data, status } = await userService.indexUsers();
    console.log(data.data.users);
    if (status === 200 || status === 201) {
      dispatch(setUsers(data));
    }
    dispatch(hideLoading());
  },
);
