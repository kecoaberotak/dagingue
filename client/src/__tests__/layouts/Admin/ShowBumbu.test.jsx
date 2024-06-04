import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

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
    };
  };

  it("should render ShowBumbu Page", async () => {
    const { buttonsEdit } = await renderElements();

    expect(buttonsEdit[0]).toBeInTheDocument();
    screen.debug();
  });
});
