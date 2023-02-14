import { useSelector } from 'react-redux';

import { useNavigate, Outlet, Navigate } from 'react-router-dom';

export function UserAuth() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);

  if (userCredentials) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
export function UserLoggedIn() {
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  if (userCredentials) {
    return <Navigate to="/home" />;
  } else {
    return <Outlet />;
  }
}
