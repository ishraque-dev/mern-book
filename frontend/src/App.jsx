import Login from './pages/Login';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedHome, ProtectedAuthPages } from './routes/ProtectedRoutes';
import Registration from './pages/Registration';
const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedAuthPages />,
    children: [
      {
        index: true, // (/)
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Registration />,
      },
    ],
  },

  {
    element: <ProtectedHome />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
