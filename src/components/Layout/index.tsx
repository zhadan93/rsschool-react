import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';
import Header from 'components/Header';

type LayoutProps = {
  content?: JSX.Element;
};

const Layout = ({ content }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">{content || <Outlet />}</main>
    </>
  );
};

export default Layout;
