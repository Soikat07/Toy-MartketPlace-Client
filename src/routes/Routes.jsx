import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'blog',
        element:<Blog/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'registration',
        element:<Registration/>
      }
    ]
  }
])
export default router;