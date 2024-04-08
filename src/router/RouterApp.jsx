import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LeaderboardPage from "../pages/LeaderBoardPage";
import DetailThreadPage from "../pages/DetailThreadPage";
import AddThreadPage from "../pages/AddThreadPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/leaderboards" element={<LeaderboardPage />} />
      <Route path="/thread/:id" element={<DetailThreadPage />} />
      <Route path="/thread/new" element={<AddThreadPage />} />
    </Routes>
  );
};

export default Router;
