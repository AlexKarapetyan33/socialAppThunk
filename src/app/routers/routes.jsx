import { createBrowserRouter } from "react-router-dom";
import { Users } from "../../components/pages/Users/Users";
import { Home } from "../../components/pages/Home/Home";
import { Profile } from "../../components/pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />,
  },

  {
    path : "/users",
    element: <Users />,
  },
  {
    path : "/users/:id",
    element : <Profile />
  }
]);