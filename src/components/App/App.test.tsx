import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import routes from 'routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('App component', () => {
  test('render App Home page', () => {
    render(<App />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('render NotFound component when navigating a non-existent route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/test'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('Route from About page to Home page', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/about'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('about')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Home'));

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
