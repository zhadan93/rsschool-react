import React from 'react';
import { createRoutesFromElements, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import CreateCard from 'pages/CreateCard';

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Navigate to="404" replace />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="create-card" element={<CreateCard />} />
    <Route path="404" element={<NotFound />} />
  </Route>
);

export default routes;
