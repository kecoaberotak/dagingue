import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routesConfig from "../../routes/routesConfig";

import LoginStatusProvider from "../../contexts/LoginStatus";
import AdminInfoProvider from "../../contexts/AdminInfo";
import { HelmetProvider } from "react-helmet-async";

describe("App entry point", () => {
  const renderRoutes = (route) => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    });

    render(
      <LoginStatusProvider>
        <AdminInfoProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AdminInfoProvider>
      </LoginStatusProvider>
    );
  };

  it("should open landing page", () => {
    renderRoutes("/");

    expect(screen.getByRole("link", { name: /produk/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /tentang/i })).toBeInTheDocument();
  });

  it("should open errorPage when route not provided ", () => {
    renderRoutes("/bad/route");

    expect(screen.getByTestId("errorpage")).toBeInTheDocument();
  });

  it("should open loginPage when route to login", () => {
    renderRoutes("/login");

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("should redirect to login page if try to open admin page before login", () => {
    renderRoutes("/admin");

    expect(
      screen.queryByRole("link", { name: /about/i })
    ).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
