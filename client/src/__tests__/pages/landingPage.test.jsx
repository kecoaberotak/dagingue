import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { HelmetProvider } from "react-helmet-async";
import LandingPage from "../../pages/landingPage";

describe("landingPage", () => {
  it("should render landing page", () => {
    const { container } = render(
      <HelmetProvider>
        <LandingPage />
      </HelmetProvider>
    );

    const header = container.querySelector(".header");
    expect(header).toBeInTheDocument();

    const about = container.querySelector("#about");
    expect(about).toBeInTheDocument();

    const product = container.querySelector("#product");
    expect(product).toBeInTheDocument();

    const footer = container.querySelector(".footer");
    expect(footer).toBeInTheDocument();
  });
});
