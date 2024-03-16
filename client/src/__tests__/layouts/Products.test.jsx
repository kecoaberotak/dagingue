import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Products from "../../components/layouts/Products";

describe("Products Component", () => {
  it("should render component", () => {
    render(<Products />);

    expect(screen.getByText(/jenis/i)).toBeInTheDocument();
  });
});
