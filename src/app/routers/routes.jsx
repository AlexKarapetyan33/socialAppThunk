import { createBrowserRouter } from "react-router-dom";
import { Users } from "../../components/pages/Users/Users";
import { Home } from "../../components/pages/Home/Home";
import { Profile } from "../../components/pages/Profile/Profile";
import { Layout } from "../../components/templates/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element : <Profile /> }
    ]
  }
]);