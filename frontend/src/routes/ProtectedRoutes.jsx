import { useSelector } from 'react-redux';

import { Outlet, Navigate } from 'react-router-dom';

export function ProtectedHome() {
  // if user is not logged in then protect the home page.
  const userCredentials = useSelector((state) => state.auth.userCredentials);

  if (userCredentials) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
export function ProtectedAuthPages() {
  // if user exists the Protect the login and registration page from navigate
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  if (userCredentials) {
    return <Navigate to="/home" />;
  } else {
    return <Outlet />;
  }
}
