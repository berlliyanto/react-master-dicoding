import BaseServices from "./baseService";

class LeaderboardService extends BaseServices {
  async indexLeaderboards () {
    return await this.get({ route: "/leaderboards", query : "" });
  }
}

export default LeaderboardService;
