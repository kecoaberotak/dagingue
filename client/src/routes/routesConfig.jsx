// Pages
import LandingPage from "../pages/landingPage";
import ErrorPage from "../pages/errorPage";
import AdminPage from "../pages/adminPage";
import LoginPage from "../pages/loginPage";

const routesConfig = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default routesConfig;
