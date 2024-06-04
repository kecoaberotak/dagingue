import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import ShowBumbu from "../../../components/layouts/Admin/ShowBumbu";
import IdBumbuProvider from "../../../contexts/IdBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("ShowBumbu", () => {
  const renderElements = async () => {
    render(
      <DisplayStatusProvider>
        <IdBumbuProvider>
          <ShowBumbu />
        </IdBumbuProvider>
      </DisplayStatusProvider>
    );

    return {
      buttonsEdit: await screen.findAllByRole("button", { name: /edit/i }),
      buttonsHapus: await screen.findAllByRole("button", { name: /hapus/i }),
      buttonsTambah: await screen.findByRole("button", { name: /tambah/i }),
    };
  };

  window.URL.createObjectURL = vi.fn();
  window.alert = vi.fn();
  window.alert.mockClear();

  it("should render ShowBumbu Page", async () => {
    const user = userEvent.setup();
    const { buttonsEdit, buttonsHapus, buttonsTambah } = await renderElements();

    expect(buttonsEdit[0]).toBeInTheDocument();
    expect(buttonsHapus[0]).toBeInTheDocument();
    expect(buttonsTambah).toBeInTheDocument();

    await user.click(buttonsEdit[0]);
    await user.click(buttonsHapus[0]);
    await user.click(buttonsTambah);
  });
});
