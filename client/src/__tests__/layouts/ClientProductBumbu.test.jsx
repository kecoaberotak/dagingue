import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ProductBumbu from "../../components/layouts/ClientProductBumbu";
import DataBumbuProvider from "../../contexts/DataBumbu";
import ImageSelectedContexProvider from "../../contexts/ImageSelected";
import DescSelectedProvider from "../../contexts/DescSelected";
import TitleSelectedProvider from "../../contexts/TitleSelected";

describe("ProductBumbu Component", () => {
  it("should render component", () => {
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

    expect(
      screen.getByRole("heading", { name: /produk/i })
    ).toBeInTheDocument();
  });
});
