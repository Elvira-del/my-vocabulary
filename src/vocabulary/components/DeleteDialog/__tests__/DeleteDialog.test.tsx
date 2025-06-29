import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { DeleteDialog } from "../DeleteDialog";

describe("DeleteDialog", () => {
  it("renders when isOpenDialog is true", () => {
    render(
      <DeleteDialog
        isOpenDialog={true}
        onCancelDelete={() => {}}
        onConfirmDelete={() => {}}
      />,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
  });

  it("doesn't render when isOpenDialog is false", () => {
    const { container } = render(
      <DeleteDialog
        isOpenDialog={false}
        onCancelDelete={() => {}}
        onConfirmDelete={() => {}}
      />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("calls callbacks on buttons clicks", async () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    const user = userEvent.setup();

    render(
      <DeleteDialog
        isOpenDialog={true}
        onCancelDelete={onCancel}
        onConfirmDelete={onConfirm}
      />,
    );

    await user.click(screen.getByRole("button", { name: /cancel/i }));
    await user.click(screen.getByRole("button", { name: /i'm sure/i }));

    expect(onCancel).toHaveBeenCalledOnce();
    expect(onConfirm).toHaveBeenCalledOnce();
  });
});
