import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import AboutContent from "../../../components/layouts/Admin/AboutContent";
import DisplayStatusProvider from "../../../contexts/DisplayStatus";
import { errorHandler } from "../../mocks/handler";
import { server } from "../../mocks/server";

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

  it("error handling get about", () => {
    server.use(...errorHandler);
    renderComponent();
  });

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

    expect(input1.type).toBe("file");
    expect(input2.type).toBe("file");

    const quill = container.querySelector(".quill");
    expect(quill).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("Should upload file when user input 2 image files", async () => {
    const user = userEvent.setup();
    renderComponent();

    const blob1 = new File(["/dagingue-product.jpg"], "test-file-1", {
      type: "image/jpg",
    });

    const blob2 = new File(["/dagingue-product.jpg"], "test-file-2", {
      type: "image/jpg",
    });

    const input1 = screen.getByTestId("input-image-1");
    const input2 = screen.getByTestId("input-image-2");

    await user.upload(input1, blob1);
    await user.upload(input2, blob2);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
  });

  it("Should upload file when user input only one image file", async () => {
    const user = userEvent.setup();
    renderComponent();

    const blob1 = new File(["/dagingue-product.jpg"], "test-file-1", {
      type: "image/jpg",
    });

    const input1 = screen.getByTestId("input-image-1");

    await user.upload(input1, blob1);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
  });

  it("Should upload file when user not input any image file", async () => {
    const user = userEvent.setup();
    renderComponent();

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
  });

  it("error handling edit about", async () => {
    server.use(...errorHandler);

    const user = userEvent.setup();
    renderComponent();

    const blob1 = new File(["/dagingue-product.jpg"], "test-file-1", {
      type: "image/jpg",
    });

    const blob2 = new File(["/dagingue-product.jpg"], "test-file-2", {
      type: "image/jpg",
    });

    const input1 = screen.getByTestId("input-image-1");
    const input2 = screen.getByTestId("input-image-2");

    await user.upload(input1, blob1);
    await user.upload(input2, blob2);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
  });
});
