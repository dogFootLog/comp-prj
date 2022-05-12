import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import CheckboxPage from "@/pages/CheckboxPage";
import ModalSimplePage from "@/pages/ModalSimplePage";
import DropdownPage from "@/pages/DropdownPage";
import UseStatePage from "@/pages/UseStatePage";
import UseRefPage from "@/pages/UseRefPage";
import CssPage from "@/pages/CssPage";

const Routes = () => {
  const route = [
    { path: "/", element: <Home /> },
    { path: "/checkbox", element: <CheckboxPage /> },
    { path: "/modalSimple", element: <ModalSimplePage /> },
    { path: "/dropdown", element: <DropdownPage /> },
    { path: "/useRef", element: <UseRefPage /> },
    { path: "/useState", element: <UseStatePage /> },
    { path: "/css", element: <CssPage /> },
  ];
  const routes = useRoutes(route);
  return routes;
};

export default Routes;
