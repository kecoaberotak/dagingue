import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { server } from "../mocks/server";
import { errorGetBumbuPotong } from "../mocks/handler";
import { ProductPotong2Products, ProductPotong1Product } from "../mocks/handler";

import ProductPotong from "../../components/layouts/ClientProductPotong";

window.URL.createObjectURL = vi.fn();
window.alert = vi.fn();
window.alert.mockClear();

describe("ProductPotong Component", () => {
  it("error handling get potong", () => {
    server.use(...errorGetBumbuPotong);
    render(<ProductPotong />);
  });

  it("should render heading and title", () => {
    render(<ProductPotong />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/produk/i);

    const title = screen.getByText(/jenis potongan/i);
    expect(title).toBeInTheDocument();
  });

  it("should render skeleton when data not provided", () => {
    render(<ProductPotong />);

    const skeletons = screen.getAllByTestId("potong-skeleton");
    expect(skeletons[0], skeletons[1]).toBeInTheDocument();
  });

  it("should render card when data is provided", async () => {
    render(<ProductPotong />);

    const cards = await screen.findAllByTestId("card-potong");
    const image = within(cards[0]).getByRole("img");
    expect(image).toBeInTheDocument();

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass("potong-img"));
  });

  it("should render card when provided with 2 data", async () => {
    server.use(...ProductPotong2Products);
    render(<ProductPotong />);

    const cards = await screen.findAllByTestId("card-potong");
    const image = within(cards[0]).getByRole("img");
    expect(image).toBeInTheDocument();

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass("potong-img"));
  });

  it("should render card when only 1 data provided", async () => {
    server.use(...ProductPotong1Product);
    render(<ProductPotong />);

    const cards = await screen.findAllByTestId("card-potong");
    const image = within(cards[0]).getByRole("img");
    expect(image).toBeInTheDocument();

    fireEvent.load(image);
    await waitFor(() => expect(image).toHaveClass("potong-img"));
  });
});
