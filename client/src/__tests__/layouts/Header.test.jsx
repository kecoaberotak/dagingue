import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Header from "../../components/layouts/Header";

describe("Header Component", () => {
  it("should render header", () => {
    render(<Header />);

    const element = screen.getByText(/produk/i);
    expect(element).toBeInTheDocument();

    // check element lain
  });
});
