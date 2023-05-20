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
import AddToy from "../pages/AddAToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../UpdateToy/UpdateToy";

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
        path: 'myToys',
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: 'addToy',
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: 'updateToy/:id',
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: 'toys/:id',
        element: (
          <PrivateRoute>
            <SingleToy />
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