import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ProductPotong from "../../components/layouts/ClientProductPotong";

describe("ProductPotong Component", () => {
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
});
