import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Footer from "../../components/layouts/Footer";

describe("Footer Component", () => {
  it("should render component", () => {
    render(<Footer />);

    const heading = screen.getByRole("heading", { name: /kontak/i });
    expect(heading).toBeInTheDocument();

    const title = screen.getByText(/hubungi kami/i);
    expect(title).toBeInTheDocument();

    const content = screen.getByRole("link", { name: /dagingue@gmail\.com/i });
    expect(content).toBeInTheDocument();

    // cari tau apa itu role contentinfo
    const socmed = screen.getByRole("contentinfo");
    within(socmed).getByRole("list");
    expect(socmed).toBeInTheDocument();

    const logo = screen.getByRole("contentinfo");
    within(logo).getByRole("img", { name: /logo dagingue/i });
    expect(logo).toBeInTheDocument();
  });
});
