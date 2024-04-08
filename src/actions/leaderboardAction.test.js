import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import LeaderboardService from "../services/leaderboardService";
import { fetchAllLeaderboards } from "./leaderboardAction";
import { setLeaderboard } from "../redux/slice/leaderboardSlice";

/**
 * Skenario test
 *
 * - fetchAllLeaderboards thunk
 * - should dispatch action correctly when data fetching success
 */

const fakeData = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
  {
    user: {
      id: "users-2",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 5,
  },
];

const fakeResponse = {
  data: { data: { leaderboards: fakeData } },
  status: 200,
};

describe("fetchAllLeaderboards thunk", () => {
  let originalIndexLeaderboards;
  let leaderBoardService;

  beforeEach(() => {
    originalIndexLeaderboards = LeaderboardService.prototype.indexLeaderboards;
    leaderBoardService = new LeaderboardService();
  });

  afterEach(() => {
    LeaderboardService.prototype.indexLeaderboards = originalIndexLeaderboards;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arrange
    // Stub implementation

    LeaderboardService.prototype.indexLeaderboards = vi
      .fn()
      .mockResolvedValue(fakeResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await fetchAllLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setLeaderboard(fakeResponse.data));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
