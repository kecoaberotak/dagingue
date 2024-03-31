// contexts
import AdminInfoProvider from "./contexts/AdminInfo";
import LoginStatusProvider from "./contexts/LoginStatus";

// css
import "./index.css";

// Routes Config
import routesConfig from "./routes/routesConfig";

// Middleware
import { HelmetProvider } from "react-helmet-async";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <LoginStatusProvider>
      <AdminInfoProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AdminInfoProvider>
    </LoginStatusProvider>
  );
};

export default App;
