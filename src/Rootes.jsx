import App from "./App";
import About from "./components/About";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import News from "./components/News";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
];

export default routes;
