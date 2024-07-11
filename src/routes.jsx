import { createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import Users from "./pages/ListUsers/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },

  {
    path: "usuarios",
    element: <Users />,
  },
]);

export default router;
