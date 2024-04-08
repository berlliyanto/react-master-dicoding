/**
 * test scenario for threadReducer
 *
 *  - threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given the setThreads action
 *  - should return the filtered threads when given the filterThreads action
 *  - should return all threads when given a null category with the filterThreads action
 *
 */

import { describe, it, expect } from "vitest";
import threadReducer, { setThreads, filterThreads } from "./threadSlice";

describe("threadReducer function", () => {
  it("should return the initial state when given an unknown action", () => {
    const initialState = {
      threads: [],
      filteredThreads: [],
    };
    const newState = threadReducer(undefined, { type: "UNKNOWN_ACTION" });

    expect(newState).toEqual(initialState);
  });

  it("should return the threads when given the setThreads action", () => {
    const initialState = {
      threads: [],
      filteredThreads: [],
    };
    const threads = [
      { id: 1, title: "Thread 1", category: "category1" },
      { id: 2, title: "Thread 2", category: "category2" },
    ];
    const newState = threadReducer(initialState, setThreads(threads));

    expect(newState).toEqual({
      threads: threads,
      filteredThreads: threads,
    });
  });

  it("should return the filtered threads when given the filterThreads action", () => {
    const currentState = {
      threads: [
        { id: 1, title: "Thread 1", category: "category1" },
        { id: 2, title: "Thread 2", category: "category2" },
      ],
      filteredThreads: [],
    };
    const filteredThreads = [
      { id: 1, title: "Thread 1", category: "category1" },
    ];
    const newState = threadReducer(currentState, filterThreads("category1"));

    expect(newState.filteredThreads).toEqual(filteredThreads);
  });

  it("should return all threads when given a null category with the filterThreads action", () => {
    const currentState = {
      threads: [
        { id: 1, title: "Thread 1", category: "category1" },
        { id: 2, title: "Thread 2", category: "category2" },
      ],
      filteredThreads: [],
    };
    const newState = threadReducer(currentState, filterThreads(null));

    expect(newState.filteredThreads).toEqual(currentState.threads);
  });
});
