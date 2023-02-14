import Login from './pages/Login';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserAuth, UserLoggedIn } from './routes/UserAuth';
import Registration from './pages/Registration';
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLoggedIn />,
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
    element: <UserAuth />,
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
