import React from 'react';
import { Outlet } from 'react-router-dom';
import Registration from './Registration';
function RootLayout() {
  return (
    <>
      <Registration />
      <Outlet />
    </>
  );
}

export default RootLayout;
