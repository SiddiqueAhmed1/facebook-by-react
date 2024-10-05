import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const PublicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default PublicRouter;