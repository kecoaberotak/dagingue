import { render, screen } from "@testing-library/react";
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
});
