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
describe("ProductBumbu -  ShowBumbu", () => {
  it("should delete bumbu when user click Hapus button", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonsHapus = await screen.findAllByRole("button", {
      name: /hapus/i,
    });
    await user.click(buttonsHapus[0]);
  });
});
describe("ProductBumbu - EditBumbu", () => {
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

describe("ProductBumbu - AddBumbu", () => {
  it("should open AddBumbu component", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const inputNamaBumbu = screen.getByTestId("input-nama");
    expect(inputNamaBumbu).toBeInTheDocument();
    await user.type(inputNamaBumbu, "Nama Bumbu");

    const blob = new File(["/dagingue-product.jpg"], "test-file-image", {
      type: "image/jpg",
    });

    const inputGambarBumbu = screen.getByTestId("input-gambar");
    expect(inputGambarBumbu).toBeInTheDocument();
    await user.upload(inputGambarBumbu, blob);

    const gambarBumbu = await screen.findByRole("img");
    expect(gambarBumbu).toBeInTheDocument();

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    await user.click(buttonSubmit);
  });

  it("error handling", async () => {
    server.use(...errorHandler);
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    await user.click(buttonSubmit);
  });

  it("should open ShowBumbu component when user click cancel from EditBumbu", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkBumbu = screen.getByRole("link", { name: /bumbu/i });
    await user.click(linkBumbu);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const buttonCancel = await screen.findByRole("button", { name: /cancel/i });
    await user.click(buttonCancel);
  });
});

// Testing ProductPotong
describe("ProductPotong -  AddPotong", () => {
  it("should open AddPotong component", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkPotong = screen.getByRole("link", { name: /potong/i });
    await user.click(linkPotong);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const inputJenisPotong = screen.getByTestId("input-jenis");
    expect(inputJenisPotong).toBeInTheDocument();
    await user.type(inputJenisPotong, "jenis potongan");

    const inputDescPotong = screen.getByTestId("input-desc");
    expect(inputDescPotong).toBeInTheDocument();
    await user.type(inputDescPotong, "Deskripsi potongan");

    const blob = new File(["/dagingue-product.jpg"], "test-file-image", {
      type: "image/jpg",
    });

    const inputGambarPotong = screen.getByTestId("input-gambar");
    expect(inputGambarPotong).toBeInTheDocument();
    await user.upload(inputGambarPotong, blob);

    const gambarPotong = await screen.findByRole("img");
    expect(gambarPotong).toBeInTheDocument();

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    await user.click(buttonSubmit);
  });

  it("error handling", async () => {
    server.use(...errorHandler);
    renderComponent();
    const user = userEvent.setup();

    const linkPotong = screen.getByRole("link", { name: /potong/i });
    await user.click(linkPotong);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const buttonSubmit = await screen.findByRole("button", { name: /submit/i });
    await user.click(buttonSubmit);
  });

  it("should open ShowBumbu component when user click cancel from EditBumbu", async () => {
    renderComponent();
    const user = userEvent.setup();

    const linkPotong = screen.getByRole("link", { name: /potong/i });
    await user.click(linkPotong);

    const buttonTambah = await screen.findByRole("button", { name: /tambah/i });
    await user.click(buttonTambah);

    const buttonCancel = await screen.findByRole("button", { name: /cancel/i });
    await user.click(buttonCancel);
  });
});
