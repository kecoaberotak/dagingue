import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdminInfoProvider from "../../../contexts/AdminInfo";
import LoginStatusProvider from "../../../contexts/LoginStatus";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";
import AdminPanel from "../../../components/layouts/Admin/Dashboard";
import { BrowserRouter } from "react-router-dom";

describe("Dashboard", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <LoginStatusProvider>
          <AdminInfoProvider>
            <DisplayStatusProvider>
              <AdminPanel />
            </DisplayStatusProvider>
          </AdminInfoProvider>
        </LoginStatusProvider>
      </BrowserRouter>
    );

  it("should render AboutContent component when first load", () => {
    renderComponent();

    const headingAbout = screen.getByRole("heading", {
      name: /about/i,
    });

    expect(headingAbout).toBeInTheDocument();
  });

  it("should render ProductPotong component when user click link 'Potongan' ", () => {
    renderComponent();

    const linkPotong = screen.getByRole("link", { name: /potongan/i });

    fireEvent.click(linkPotong);

    const headingPotong = screen.getByRole("heading", { name: /potongan/i });
    expect(headingPotong).toBeInTheDocument();
  });

  it("should render ProductPotong component when user click link 'Bumbu' ", () => {
    renderComponent();

    const linkPotong = screen.getByRole("link", { name: /bumbu/i });

    fireEvent.click(linkPotong);

    const headingPotong = screen.getByRole("heading", { name: /bumbu/i });
    expect(headingPotong).toBeInTheDocument();
  });
});
