import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import About from "../../components/layouts/About";

describe("About Component", () => {
  const renderElements = async () => {
    render(<About />);

    return {
      heading: await screen.findByRole("heading", {
        name: /tentang dagingue bogor/i,
      }),
      img1: screen.getByRole("img", { name: /tentang dagingue/i }),
      img2: screen.getByRole("img", { name: /produk dagingue/i }),
      skeletonImg1: screen.getByTestId("skeleton-image-1"),
      skeletonImg2: screen.getByTestId("skeleton-image-2"),
    };
  };

  it("should render heading when fetching data success", async () => {
    const { heading } = await renderElements();

    expect(heading).toBeInTheDocument();
  });

  it("should call onload event image when data fetching success", async () => {
    const { img1, img2 } = await renderElements();

    fireEvent.load(img1);
    await waitFor(() => expect(img1).toHaveClass("foto-1"));

    fireEvent.load(img2);
    await waitFor(() => expect(img2).toHaveClass("foto-2"));
  });

  it("should render skeleton for image when data not loaded", async () => {
    const { skeletonImg1, skeletonImg2 } = await renderElements();

    expect(skeletonImg1).toBeInTheDocument();
    expect(skeletonImg2).toBeInTheDocument();
  });

  it("should not render skeleton for image when data is loaded", async () => {
    const { skeletonImg1, skeletonImg2, img1, img2 } = await renderElements();

    fireEvent.load(img1);
    await waitFor(() => expect(img1).toHaveClass("foto-1"));

    fireEvent.load(img2);
    await waitFor(() => expect(img2).toHaveClass("foto-2"));

    expect(skeletonImg1).not.toBeInTheDocument();
    expect(skeletonImg2).not.toBeInTheDocument();
  });

  it("should render skeleton for article when data not loaded", () => {
    render(<About />);

    const skeletonArticle = screen.getByTestId("skeleton-article");
    expect(skeletonArticle).toBeInTheDocument();
  });

  it("should not render skeleton for article when data is loaded", async () => {
    render(<About />);

    const skeletonArticle = screen.getByTestId("skeleton-article");

    await screen.findByRole("heading", {
      name: /tentang dagingue bogor/i,
    });

    expect(skeletonArticle).not.toBeInTheDocument();
  });

  // tambahin kalo fetching data gagal
});
