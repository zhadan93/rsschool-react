import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';
import Header from 'components/Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
