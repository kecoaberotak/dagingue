import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ProductBumbu from "../../components/layouts/ClientProductBumbu";
import DataBumbuProvider from "../../contexts/DataBumbu";
import ImageSelectedContexProvider from "../../contexts/ImageSelected";
import DescSelectedProvider from "../../contexts/DescSelected";
import TitleSelectedProvider from "../../contexts/TitleSelected";

describe("ProductBumbu Component", () => {
  const renderComponent = () => {
    render(
      <DataBumbuProvider>
        <ImageSelectedContexProvider>
          <DescSelectedProvider>
            <TitleSelectedProvider>
              <ProductBumbu />
            </TitleSelectedProvider>
          </DescSelectedProvider>
        </ImageSelectedContexProvider>
      </DataBumbuProvider>
    );

    return {
      title: screen.getByRole("heading", { name: /produk/i }),
      subTitle: screen.getByText(/varian/i),
    };
  };

  //   GalleryInfo
  it("should render title and subtitle", () => {
    const { title, subTitle } = renderComponent();

    expect(title, subTitle).toBeInTheDocument();
  });

  it("should render skeleton for gallery info when dataBumbu is not provided", () => {
    renderComponent();
    const skeleton = screen.getByTestId("skeleton-gallery-info");

    expect(skeleton).toBeInTheDocument();
  });

  //   GaleryInfoImage
  it("should render image for GalleryInfoImage if data provided and image has loaded", async () => {
    renderComponent();

    const container = await screen.findByTestId("gallery-info-image");

    const img = within(container).getByRole("img");
    expect(img).toBeInTheDocument();

    fireEvent.load(img);
    await waitFor(() => expect(img).toHaveClass(/default/i));
  });

  it("should render skeleton for GalleryInfoImage if image not loaded", async () => {
    renderComponent();

    const container = await screen.findByTestId("gallery-info-image");

    const skeleton = container.querySelector(".react-loading-skeleton");

    expect(skeleton).toBeInTheDocument();
  });

  //   GalleryInfoBumbu
  it("should render heading and bumbu description when dataBumbu is provided", async () => {
    renderComponent();

    const container = await screen.findByTestId("gallery-info-bumbu");
    const heading = within(container).getByRole("heading");
    const desc = await screen.findByTestId("gallery-info-bumbu-desc");

    expect(heading, desc).toBeInTheDocument();
  });

  // GalleryItems

  //   test juga pas user klik image
});
