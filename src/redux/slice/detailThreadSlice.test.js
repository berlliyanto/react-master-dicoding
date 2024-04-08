/**
 * test scenario for detailThreadReducer
 *
 *  - detailThreadReducer function
 *  - should return the initial state
 *  - should handle setCategory action
 *
 */

const fakeData = {
  detailThread: {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    owner: {
      id: "users-1",
      name: "John Doe",
      avatar: "https://generated-image-url.jpg",
    },
  },
};

import { describe, it, expect } from "vitest";
import detailThreadReducer, { setDetailThread } from "./detailThreadSlice";

describe("detailThread reducer", () => {
  it("should return the initial state", () => {
    const initialState = {};
    const newState = detailThreadReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should handle setDetailThread action", () => {
    const initialState = [];

    const action = setDetailThread(fakeData.detailThread);
    const newState = detailThreadReducer(initialState, action);
    expect(newState).toEqual(fakeData.detailThread);
  });
});
