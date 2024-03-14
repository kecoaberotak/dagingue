import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("should call onload event image when data fetching success", async () => {
    render(<About />);

    const img = screen.getByRole("img", { name: /tentang dagingue/i });
    fireEvent.load(img);

    await waitFor(() => expect(img).toHaveClass("foto-1"));
  });
});
