import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import ShowBumbu from "../../../components/layouts/Admin/ShowBumbu";
import IdBumbuProvider from "../../../contexts/IdBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("ShowBumbu", () => {
  it("should render ShowBumbu Page", () => {
    render(
      <DisplayStatusProvider>
        <IdBumbuProvider>
          <ShowBumbu />
        </IdBumbuProvider>
      </DisplayStatusProvider>
    );

    screen.debug();
  });
});
