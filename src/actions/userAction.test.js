import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import UserService from "../services/userService";
import { setUsers } from "../redux/slice/userSlice";
import { fetchAllUsers } from "./userAction";

/**
 * Skenario test
 *
 * - userAction thunk
 * - should dispatch action correctly when data fetching success
 */

const fakeData = [
  {
    id: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://generated-image-url.jpg",
  },
  {
    id: "jane_doe",
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "https://generated-image-url.jpg",
  },
  {
    id: "fulan",
    name: "Si Fulan",
    email: "fulan@example.com",
    avatar: "https://generated-image-url.jpg",
  },
];
const fakeResponse = {
  data: { data: { users: fakeData } },
  status: 200,
};

describe("fetchAllUsers thunk", () => {
  let originalIndexUsers;
  let userService;

  beforeEach(() => {
    originalIndexUsers = UserService.prototype.indexUsers;
    userService = new UserService();
  });

  afterEach(() => {
    UserService.prototype.indexUsers = originalIndexUsers;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // Arrange
    // Stub implementation

    UserService.prototype.indexUsers = vi
      .fn()
      .mockResolvedValue(fakeResponse);

    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await fetchAllUsers()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setUsers(fakeResponse.data));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
