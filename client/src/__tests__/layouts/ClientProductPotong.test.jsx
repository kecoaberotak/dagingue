import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ProductPotong from "../../components/layouts/ClientProductPotong";

describe("ProductPotong Component", () => {
  it("should render component", () => {
    render(<ProductPotong />);

    screen.debug();
  });
});
