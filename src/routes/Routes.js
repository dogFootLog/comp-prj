import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import CheckboxPage from "../pages/CheckboxPage";

const Routes = () => {
  const route = [
    { path: "/", element: <Home /> },
    { path: "/checkbox", element: <CheckboxPage /> },
  ];
  const routes = useRoutes(route);
  return routes;
};

export default Routes;
