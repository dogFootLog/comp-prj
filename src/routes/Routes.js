import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import CheckboxPage from "@/pages/CheckboxPage";
import ModalSimplePage from "@/pages/ModalSimplePage";

const Routes = () => {
  const route = [
    { path: "/", element: <Home /> },
    { path: "/checkbox", element: <CheckboxPage /> },
    { path: "/modalSimple", element: <ModalSimplePage /> },
  ];
  const routes = useRoutes(route);
  return routes;
};

export default Routes;
