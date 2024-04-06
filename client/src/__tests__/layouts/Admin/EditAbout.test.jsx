import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import AboutContent from "../../../components/layouts/Admin/AboutContent";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";

describe("AboutContent", () => {
  const renderComponent = () =>
    render(
      <DisplayStatusProvider>
        <AboutContent />
      </DisplayStatusProvider>
    );

  window.URL.createObjectURL = vi.fn();
  window.alert = vi.fn();
  window.alert.mockClear();

  it("should render EditAbout", async () => {
    const { container } = renderComponent();

    const headingAbout = container.querySelector(".form-title");
    expect(headingAbout).toBeInTheDocument();
    expect(headingAbout).toHaveTextContent(/edit/i);

    const images = await within(container).findAllByRole("img");
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();

    const input1 = screen.getByTestId("input-image-1");
    const input2 = screen.getByTestId("input-image-2");

    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();

    const quill = container.querySelector(".quill");
    expect(quill).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("should run handler", async () => {
    const user = userEvent.setup();
    renderComponent();

    const testFile = new File(["about-us"], "/dagingue-product.jpg", {
      type: "image/jpg",
    });

    const input1 = screen.getByTestId("input-image-1");
    const input2 = screen.getByTestId("input-image-2");

    // masalah di upload filenya
    await user.upload(input1, testFile);
    await user.upload(input2, testFile);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
  });

  // test handler edit data
  // test kalo user ga ngedit konten dan ga update gambar
  // test kalo user edit konten tapi ga update gambar
  // ga edit tapi update gambar
  // update salah satu gambar
});
