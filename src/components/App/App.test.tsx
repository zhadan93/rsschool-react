import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from '../../test/helpers';

describe('App component', () => {
  test('render App', () => {
    render(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('render NotFound component when navigating a non-existent route', () => {
    const appWithRouting = renderWithRouter(['/', '/test']);
    render(appWithRouting);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('Switch between About page and Home page', async () => {
    const appWithRouting = renderWithRouter(['/']);
    render(appWithRouting);

    await userEvent.click(screen.getByText('About'));

    expect(screen.getByTestId('about')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Home'));

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
