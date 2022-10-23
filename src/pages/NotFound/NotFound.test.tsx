import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import routes from 'routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('NotFound component', () => {
  test('Route from NotFound page to Home page with Home Page button click', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/404'],
    });

    render(<RouterProvider router={router} />);

    await userEvent.click(screen.getByRole('button', { name: /home page/i }));

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
