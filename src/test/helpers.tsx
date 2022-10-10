import React from 'react';

import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';

const renderWithRouter = (initialEntries: string[]): JSX.Element => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Navigate to="404" replace />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="404" element={<NotFound />} />
    </Route>
  );

  const router = createMemoryRouter(routes, {
    initialEntries,
  });

  return <RouterProvider router={router} />;
};

export default renderWithRouter;
