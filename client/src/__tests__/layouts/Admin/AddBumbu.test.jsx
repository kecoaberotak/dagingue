import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import AddBumbu from "../../../components/layouts/Admin/AddBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("AddBumbu", () => {
  it("should render element", () => {
    render(
      <DisplayStatusProvider>
        <AddBumbu />
      </DisplayStatusProvider>
    );

    screen.debug();
  });
});
