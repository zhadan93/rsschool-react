import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from '../../routes';

const App = (): JSX.Element => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
