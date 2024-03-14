import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import About from "../../components/layouts/About";

describe("About Component", () => {
  it("should render heading when fetching data success", async () => {
    render(<About />);

    const heading = await screen.findByRole("heading", {
      name: /tentang dagingue bogor/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should call onload event image when data fetching success", async () => {
    render(<About />);

    const img1 = screen.getByRole("img", { name: /tentang dagingue/i });
    fireEvent.load(img1);
    await waitFor(() => expect(img1).toHaveClass("foto-1"));

    const img2 = screen.getByRole("img", { name: /produk dagingue/i });
    fireEvent.load(img2);
    await waitFor(() => expect(img2).toHaveClass("foto-2"));
  });

  it("should render skeleton for article when data not loaded", () => {
    render(<About />);

    const skeletonImg1 = screen.getByTestId("skeleton-image-1");
    expect(skeletonImg1).toBeInTheDocument();

    const skeletonImg2 = screen.getByTestId("skeleton-image-2");
    expect(skeletonImg2).toBeInTheDocument();

    screen.debug();
  });
});
