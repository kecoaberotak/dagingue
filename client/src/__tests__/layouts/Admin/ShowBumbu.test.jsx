import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ShowBumbu from "../../../components/layouts/Admin/ShowBumbu";
import IdBumbuProvider from "../../../contexts/IdBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("ShowBumbu", () => {
  it("should render ShowBumbu Page", async () => {
    render(
      <DisplayStatusProvider>
        <IdBumbuProvider>
          <ShowBumbu />
        </IdBumbuProvider>
      </DisplayStatusProvider>
    );

    const buttonsEdit = await screen.findAllByRole("button", { name: /edit/i });

    expect(buttonsEdit[0]).toBeInTheDocument();
    screen.debug();
  });
});
