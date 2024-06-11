import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import AdminInfoProvider from "../../../contexts/AdminInfo";
import LoginStatusProvider from "../../../contexts/LoginStatus";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";
import AdminPanel from "../../../components/layouts/Admin/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import { errorHandler } from "../../mocks/handler";

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

window.URL.createObjectURL = vi.fn();
window.alert = vi.fn();
window.alert.mockClear();

// Testing link menu Dashboard
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

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });

    fireEvent.click(linkBumbu);

    const headingPotong = screen.getByRole("heading", { name: /bumbu/i });
    expect(headingPotong).toBeInTheDocument();
  });

  it("should render AboutContent component when user click link 'About' ", () => {
    renderComponent();

    const linkAbout = screen.getByRole("link", { name: /about/i });

    fireEvent.click(linkAbout);

    const headingPotong = screen.getByRole("heading", { name: /about/i });
    expect(headingPotong).toBeInTheDocument();
  });
});

// Testing ProductBumbu
describe("ProductBumbu", () => {
  it("should open EditBumbu component and success submit without user have to input any edited data", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });
    await user.click(buttonsEdit[0]);

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    await user.click(buttonSubmit);
  });

  it("should success submit when user has input edited data", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });
    await user.click(buttonsEdit[0]);

    const inputNamaBumbu = screen.getByTestId("input-nama");
    expect(inputNamaBumbu).toBeInTheDocument();
    await user.type(inputNamaBumbu, "Nama Bumbu");

    const blob = new File(["/dagingue-product.jpg"], "test-file-image", {
      type: "image/jpg",
    });

    const inputGambarBumbu = screen.getByTestId("input-gambar");
    expect(inputGambarBumbu).toBeInTheDocument();
    await user.upload(inputGambarBumbu, blob);

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    await user.click(buttonSubmit);
  });

  it("error handlng", async () => {
    server.use(...errorHandler);
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });
    await user.click(buttonsEdit[0]);

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    await user.click(buttonSubmit);
  });

  it("should open ShowBumbu component when user click cancel from EditBumbu", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });
    await user.click(buttonsEdit[0]);

    const buttonCancel = await screen.findByRole("button", { name: /cancel/i });
    expect(buttonCancel).toBeInTheDocument();
    await user.click(buttonCancel);
  });
});
