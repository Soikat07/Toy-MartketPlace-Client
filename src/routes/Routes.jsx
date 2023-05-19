import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/SingleToyDetails/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'allToys',
        element: <AllToys />,
        loader: () => fetch('http://localhost:5000/toys'),
      },
      {
        path: 'toy/:id',
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
]);
export default router;