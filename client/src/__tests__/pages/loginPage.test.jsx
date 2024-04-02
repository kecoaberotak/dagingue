import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import LoginPage from "../../pages/loginPage";

import { BrowserRouter } from "react-router-dom";

import LoginStatusProvider from "../../contexts/LoginStatus";
import AdminInfoProvider from "../../contexts/AdminInfo";
import { HelmetProvider } from "react-helmet-async";

describe("Login Page", () => {
  const renderPage = () => {
    render(
      <BrowserRouter>
        <LoginStatusProvider>
          <AdminInfoProvider>
            <HelmetProvider>
              <LoginPage />
            </HelmetProvider>
          </AdminInfoProvider>
        </LoginStatusProvider>
      </BrowserRouter>
    );
  };

  it("should render login page", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "admin");
    await userEvent.type(inputPassword, "123");

    await userEvent.click(loginButton);
    // expect alert ga muncul
  });

  // tambahin test lain buat yg fokus ke login pagenya
});
