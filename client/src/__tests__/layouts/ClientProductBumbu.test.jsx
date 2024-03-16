import { render, screen } from "@testing-library/react";
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

  it("should render title and subtitle", () => {
    const { title, subTitle } = renderComponent();

    expect(title, subTitle).toBeInTheDocument();
  });
});
