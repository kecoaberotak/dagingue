import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutContent from "../../../components/layouts/Admin/AboutContent";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("AboutContent", () => {
  const renderComponent = () =>
    render(
      <DisplayStatusProvider>
        <AboutContent />
      </DisplayStatusProvider>
    );

  it("should render EditAbout", () => {
    renderComponent();

    const headingAbout = screen.getByRole("heading", {
      name: /about/i,
    });

    expect(headingAbout).toBeInTheDocument();
  });
  //   test lagi lebih banyak
});
