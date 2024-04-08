/**
 * test scenario for userReducer
 *
 *  - userReducer function
 *  - should return the initial state
 *  - should handle setCategory action
 *
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
  const fakeUser = {
    data: { data: { users: fakeData } },
    status: 200,
  };

import { describe, it, expect } from 'vitest';
import userReducer, { setUsers } from './userSlice';

describe('userSlice reducer', () => {
  it('should return the initial state', () => {
    const initialState = [];
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle setUsers action', () => {
    const initialState = [];

    const action = setUsers(fakeUser.data);
    const newState = userReducer(initialState, action);
    expect(newState).toEqual(fakeData);
  });
});
