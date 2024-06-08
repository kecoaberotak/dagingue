import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdminInfoProvider from "../../../contexts/AdminInfo";
import LoginStatusProvider from "../../../contexts/LoginStatus";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";
import AdminPanel from "../../../components/layouts/Admin/Dashboard";
import { BrowserRouter } from "react-router-dom";

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

describe("Dashboard", () => {
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

  it("should render ProductBumbu component when user click link 'Bumbu' ", () => {
    renderComponent();

    const linkPotong = screen.getByRole("link", { name: /bumbu/i });

    fireEvent.click(linkPotong);

    const headingPotong = screen.getByRole("heading", { name: /bumbu/i });
    expect(headingPotong).toBeInTheDocument();
  });

  it("should render AboutContent component when user click link 'About' ", () => {
    renderComponent();

    const linkPotong = screen.getByRole("link", { name: /about/i });

    fireEvent.click(linkPotong);

    const headingPotong = screen.getByRole("heading", { name: /about/i });
    expect(headingPotong).toBeInTheDocument();
  });
});

describe("ProductBumbu", () => {
  it("should render EditBumbu component when user click button 'Edit' ", async () => {
    renderComponent();

    const linkPotong = screen.getByRole("link", { name: /bumbu/i });

    fireEvent.click(linkPotong);

    const headingPotong = screen.getByRole("heading", { name: /bumbu/i });
    expect(headingPotong).toBeInTheDocument();

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });
    fireEvent.click(buttonsEdit[0]);

    screen.debug();
  });
});
