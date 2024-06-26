import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { server } from "../mocks/server";
import { errorGetBumbuPotong } from "../mocks/handler";

import ProductBumbu from "../../components/layouts/ClientProductBumbu";
import DataBumbuProvider from "../../contexts/DataBumbu";
import ImageSelectedContexProvider from "../../contexts/ImageSelected";
import DescSelectedProvider from "../../contexts/DescSelected";
import TitleSelectedProvider from "../../contexts/TitleSelected";

window.URL.createObjectURL = vi.fn();
window.alert = vi.fn();
window.alert.mockClear();

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

  it("error handling get bumbu", () => {
    server.use(...errorGetBumbuPotong);
    renderComponent();
  });

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
  it("should render skeleton for GalleryItems when dataBumbu not provided", () => {
    renderComponent();

    const skeleton = screen.getByTestId("skeleton-gallery-items");
    expect(skeleton).toBeInTheDocument();
  });

  it("should render image for GalleryItems when dataBumbu provided", async () => {
    renderComponent();

    const container = await screen.findAllByTestId("gallery-item-image");

    const image = within(container[0]).getByRole("img");
    expect(image).toBeInTheDocument();

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass(/default/i));

    const imageCover = container[0].querySelector(".cover");
    expect(imageCover).toBeInTheDocument();
    expect(imageCover).not.toHaveClass(/hidden/i);
  });

  it("should render skeleton image for GalleryItems when image not loaded", async () => {
    renderComponent();

    const container = await screen.findAllByTestId("gallery-item-image");

    const image = within(container[0]).getByRole("img");
    expect(image).toHaveClass(/hidden/i);

    const imageCover = container[0].querySelector(".cover");
    expect(imageCover).toHaveClass(/hidden/i);

    const skeleton = within(container[0]).getByTestId("skeleton-gallery-item-image");
    expect(skeleton).toBeInTheDocument();
  });

  // pas user pilih gambar, gallery info image dan gallery info bumbu berubah
  it("Should change description and image based on user interaction", async () => {
    renderComponent();

    const itemImages = await screen.findAllByTestId("gallery-item-image");
    const image = within(itemImages[1]).getByRole("img");
    // const image2 = within(itemImages[0]).getByRole("img");

    const imageCover = within(itemImages[1]).getByTestId("gallery-item-image-cover");

    // const imageCover2 = within(itemImages[0]).getByTestId(
    //   "gallery-item-image-cover"
    // );

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass(/default/i));

    // fireEvent.load(image2);
    // await waitFor(() => expect(image2).toHaveClass(/default/i));

    // await userEvent.click(imageCover2);
    await userEvent.click(imageCover);
  });

  it("should change cover classname based on user interaction", async () => {
    renderComponent();

    const itemImages = await screen.findAllByTestId("gallery-item-image");
    const image = within(itemImages[0]).getByRole("img");
    const image2 = within(itemImages[1]).getByRole("img");

    const imageCover = within(itemImages[0]).getByTestId("gallery-item-image-cover");

    const imageCover2 = within(itemImages[1]).getByTestId("gallery-item-image-cover");

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass(/default/i));

    fireEvent.load(image2);
    await waitFor(() => expect(image2).toHaveClass(/default/i));

    await userEvent.click(imageCover2);
    await userEvent.click(imageCover);
  });
});
