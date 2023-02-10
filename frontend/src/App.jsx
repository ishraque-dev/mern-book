import Login from './pages/Login';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/*',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
