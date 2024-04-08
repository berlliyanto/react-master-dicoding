import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://forum-api.dicoding.dev/v1",
  timeout: 30000,
});
