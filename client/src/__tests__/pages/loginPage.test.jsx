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

  it("should show alert if login success", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "admin");
    await userEvent.type(inputPassword, "123");

    await userEvent.click(loginButton);

    const alert = screen.queryByTestId("login-failed-alert");
    expect(alert).not.toBeInTheDocument();
  });

  it("should show alert if user not input any data", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "" || "{tab}");
    await userEvent.type(inputPassword, "" || "{tab}");

    await userEvent.click(loginButton);
    const alert = screen.queryByTestId("login-failed-alert");

    expect(alert).toBeInTheDocument();
  });

  it("should show alert if user not input username", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, " ");
    await userEvent.type(inputPassword, "123");

    await userEvent.click(loginButton);
    const alert = screen.queryByTestId("login-failed-alert");

    expect(alert).toBeInTheDocument();
  });

  it("should show alert if user not input password", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "admin");
    await userEvent.type(inputPassword, " ");

    await userEvent.click(loginButton);
    const alert = screen.queryByTestId("login-failed-alert");

    expect(alert).toBeInTheDocument();
  });

  it("should show alert if user input wrong username", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "admim");
    await userEvent.type(inputPassword, "123");

    await userEvent.click(loginButton);
    const alert = screen.queryByTestId("login-failed-alert");

    expect(alert).toBeInTheDocument();
  });

  it("should show alert if user input wrong password", async () => {
    renderPage();

    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toHaveTextContent(/login/i);

    const inputUsername = screen.getByRole("textbox");
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputUsername, "admin");
    await userEvent.type(inputPassword, "12345");

    await userEvent.click(loginButton);
    const alert = screen.queryByTestId("login-failed-alert");

    expect(alert).toBeInTheDocument();
  });
});
