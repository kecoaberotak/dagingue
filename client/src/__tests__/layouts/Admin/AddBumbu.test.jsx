import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import AddBumbu from "../../../components/layouts/Admin/AddBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("AddBumbu", () => {
  const renderElement = async () => {
    render(
      <DisplayStatusProvider>
        <AddBumbu />
      </DisplayStatusProvider>
    );

    window.URL.createObjectURL = vi.fn();
    window.alert = vi.fn();
    window.alert.mockClear();

    return {
      buttonSubmit: await screen.findByRole("button", { name: /submit/i }),
      buttonCancel: await screen.findByRole("button", { name: /cancel/i }),
    };
  };

  it("should cancel button", async () => {
    const user = userEvent.setup();

    const { buttonCancel, buttonSubmit } = await renderElement();

    expect(buttonCancel).toBeInTheDocument();
    await user.click(buttonCancel);

    expect(buttonSubmit).toBeInTheDocument();
    await user.click(buttonSubmit);

    screen.debug();
  });
});
