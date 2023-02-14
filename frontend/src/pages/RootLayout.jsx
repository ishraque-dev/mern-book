import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Registration';
import { useSelector } from 'react-redux';
import Home from './Home';
import Registration from './Registration';
function RootLayout() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  return <>{!userCredentials ? <Registration /> : <Navigate to="/home" />}</>;
}

export default RootLayout;
