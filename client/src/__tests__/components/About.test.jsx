import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../../components/layouts/About";

describe("About Component", () => {
  render(<About />);
  it("should render article", () => {
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });
});
