import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Searchbar from '../Searchbar';

describe('Searchbar component', () => {
  test('render Searchbar Component with empty localStorage', () => {
    render(<Searchbar />);

    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
