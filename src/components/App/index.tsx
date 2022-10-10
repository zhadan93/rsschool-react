import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';

const App = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Navigate to="404" replace />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="404" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
