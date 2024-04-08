import { createAsyncThunk } from "@reduxjs/toolkit";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import AuthService from "../services/authService";
import { setAuth, setUserId, setUserName } from "../redux/slice/authSlice";
import Token from "../utils/token";
import UserService from "../services/userService";
import toast from "react-hot-toast";
import { setToken } from "../redux/slice/tokenSlice";

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ loginData, navigate }, { dispatch }) => {
    dispatch(showLoading());
    const authService = new AuthService();
    const { data, status } = await authService.login(loginData);
    if (status === 200 || status === 201) {
      dispatch(setToken(data.data.token));
      dispatch(setAuth(true));
      toast.success("Login Success");
      navigate("/", { replace: true });
    }
    dispatch(hideLoading());
  },
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async ({ registerData, navigate }, { dispatch }) => {
    dispatch(showLoading());
    const authService = new AuthService();
    const { status } = await authService.register(registerData);
    if (status === 200 || status === 201) {
      toast.success("Register Success");
      navigate("/login", { replace: true });
    }
    dispatch(hideLoading());
  },
);

export const authProfile = createAsyncThunk(
  "auth/profile",
  async (_, { dispatch }) => {
    const token = new Token();
    if (token.hasToken()) {
      dispatch(showLoading());
      const userService = new UserService();
      const { data, status } = await userService.profile();
      if (status === 200 || status === 201) {
        dispatch(setUserName(data.data.user.name));
        dispatch(setUserId(data.data.user.id));
      } else {
        dispatch(setAuth(false));
      }
      dispatch(hideLoading());
    }
  },
);
