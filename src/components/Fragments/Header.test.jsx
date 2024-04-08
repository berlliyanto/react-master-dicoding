import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Header from './Header';

/**
 * test scenario for Header Component
 *
 *  - renders correctly
 *  - renders user name if available
 *  - does not render user name if not available
 * 
 */

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}));

describe('Header component', () => {
  it('renders header with app title', () => {
    useSelector.mockReturnValue({ name: 'Berli' } );

    const { getByText } = render(<Header />);

    const appTitleElement = getByText('Dicoding Forum App');
    expect(appTitleElement).toBeTruthy();
  });

  it('renders user name if available', () => {
    useSelector.mockReturnValue({ name: 'Berli' });

    const { getByText } = render(<Header />);

    const userNameElement = getByText('Berli');
    expect(userNameElement).toBeTruthy();
  });

  it('does not render user name if not available', () => {
    useSelector.mockReturnValue({ auth: { name: null } });

    const { queryByText } = render(<Header />);

    const userNameElement = queryByText('Berli');
    expect(userNameElement).toBeNull();
  });
});
