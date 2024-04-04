import { render, screen, within } from "@testing-library/react";
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

  it("should render EditAbout", async () => {
    const { container } = renderComponent();

    const headingAbout = container.querySelector(".form-title");
    expect(headingAbout).toBeInTheDocument();
    expect(headingAbout).toHaveTextContent(/edit/i);

    const images = await within(container).findAllByRole("img");
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();

    const quill = container.querySelector(".quill");
    expect(quill).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  // test handler edit data
});
