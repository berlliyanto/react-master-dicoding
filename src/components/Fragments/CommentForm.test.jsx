import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

/**
 * test scenario for CommentForm Component
 *
 *  - renders correctly
 *  - calls onSubmit when form is submitted
 *
 */

describe('CommentForm component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText  } = render(<CommentForm/>);
    const commentInput = getByPlaceholderText('Comment');
    const submitButton = getByText('Kirim');

    expect(commentInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('calls onSubmit when form is submitted', () => {
    const mockSubmit = vi.fn();
    const { getByText, getByPlaceholderText  } = render(<CommentForm onSubmit={mockSubmit} />);
    const commentInput = getByPlaceholderText('Comment');

    fireEvent.change(commentInput, { target: { value: 'Test comment' } });
    fireEvent.submit(commentInput.form);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
