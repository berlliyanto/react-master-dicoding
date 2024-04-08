/**
 * test scenario for categoryReducer
 *
 *  - categoryReducer function
 *  - should return the initial state
 *  - should handle setCategory action
 *
 */

import { describe, it, expect } from 'vitest';
import categoryReducer, { setCategory } from './categorySlice';

describe('categorySlice reducer', () => {
  it('should return the initial state', () => {
    const initialState = [];
    const newState = categoryReducer(undefined, {});
    expect(newState).toEqual(2);
  });

  it('should handle setCategory action', () => {
    const initialState = [];
    const data = [
      { id: 1, category: 'Category 1' },
      { id: 2, category: 'Category 2' },
    ];
    const action = setCategory(data);
    const newState = categoryReducer(initialState, action);
    expect(newState).toEqual(['Category 1', 'Category 2', 1]);
  });
});
