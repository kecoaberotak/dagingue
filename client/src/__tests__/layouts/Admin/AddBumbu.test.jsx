import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import AddBumbu from "../../../components/layouts/Admin/AddBumbu";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("AddBumbu", () => {
  const renderElement = () => {
    render(
      <DisplayStatusProvider>
        <AddBumbu />
      </DisplayStatusProvider>
    );
  };

  it("should render element", () => {
    renderElement();

    screen.debug();
  });
});
