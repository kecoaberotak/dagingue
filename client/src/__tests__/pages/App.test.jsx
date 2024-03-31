import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App entry point", () => {
  it("should landing on landing page", () => {
    render(<App />);

    screen.debug();
  });
});
