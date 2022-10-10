import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Searchbar from '../Searchbar';
import localStorageMock from '../../test/localStorageMock';

describe('Searchbar component', () => {
  test('render Searchbar Component with empty localStorage', () => {
    render(<Searchbar />);

    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  test('Save input value during Searchbar component’s unmount', async () => {
    const store = localStorageMock();
    const { setItem } = store;

    const searchKey = 'cardsSearchBar';
    const searchValue = 'test';

    const { unmount } = render(<Searchbar />);

    await userEvent.type(screen.getByRole('searchbox'), searchValue);

    unmount();
    expect(setItem).toHaveBeenCalledTimes(1);
    expect(setItem).toHaveBeenCalledWith(searchKey, searchValue);
  });

  test('Save input value during Searchbar component’s unmount in localStorage', async () => {
    const store = localStorageMock();
    const { getItem, setItem } = store;

    const searchKey = 'cardsSearchBar';
    const searchValue = 'now';

    const { unmount } = render(<Searchbar />);

    await userEvent.type(screen.getByRole('searchbox'), searchValue);

    unmount();
    expect(setItem).toHaveBeenCalledWith(searchKey, searchValue);

    render(<Searchbar />);
    expect(getItem).toHaveBeenCalledTimes(2);
    expect(screen.getByDisplayValue(searchValue)).toBeInTheDocument();
  });
});
