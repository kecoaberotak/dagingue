import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../../components/layouts/About";

describe("About Component", () => {
  const renderComponents = () => {
    render(<About />);

    return {
      article: screen.getByRole("article"),
      images: screen.getAllByRole("img"),
    };
  };

  it("should render article", () => {
    const { article } = renderComponents();

    expect(article).toBeInTheDocument();
  });

  it("should render image", () => {
    const { images } = renderComponents();

    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
  });
});
