import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Header from "../../components/layouts/Header";

describe("Header Component", () => {
  it("should render header", () => {
    render(<Header />);

    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();

    const logo = within(banner).getByRole("img", { name: /logo dagingue/i });
    expect(logo).toBeInTheDocument();

    const link1 = screen.getByRole("link", { name: /tentang kami/i });
    const link2 = screen.getByRole("link", { name: /produk/i });
    const link3 = screen.getByRole("link", { name: /kontak/i });
    expect(link1, link2, link3).toBeInTheDocument();

    const instagram = within(banner).getByRole("img", { name: /instagram/i });
    const whatsapp = within(banner).getByRole("img", { name: /whatsapp/i });
    const shopee = within(banner).getByRole("img", { name: /shopee/i });
    expect(instagram, whatsapp, shopee).toBeInTheDocument();
  });
});
