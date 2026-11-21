import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { PanelProvider, usePanel } from "./provider";
import { CollectionForm } from "./forms";

afterEach(cleanup);
function Harness() {
  const panel = usePanel();
  return (
    <>
      <span data-testid="due">{panel.students.find((s) => s.id === "BDS-1001")?.due}</span>
      <span data-testid="collections">{panel.collections.length}</span>
      <CollectionForm open onOpenChange={() => {}} />
    </>
  );
}
function review() {
  fireEvent.change(screen.getByLabelText("Student"), { target: { value: "BDS-1001" } });
  fireEvent.change(screen.getByLabelText("Amount (৳)"), { target: { value: "100" } });
  fireEvent.click(screen.getByRole("button", { name: "Review collection" }));
}
describe("Receipt confirmation", () => {
  it("does not issue a receipt or reduce dues while reviewing or cancelling", () => {
    render(
      <PanelProvider>
        <Harness />
      </PanelProvider>,
    );
    review();
    expect(screen.getByRole("heading", { name: "Confirm collection" })).toBeInTheDocument();
    expect(screen.getByTestId("due")).toHaveTextContent("2400");
    expect(screen.getByTestId("collections")).toHaveTextContent("9");
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.getByTestId("due")).toHaveTextContent("2400");
    expect(screen.getByTestId("collections")).toHaveTextContent("9");
  });
  it("issues one receipt and reduces dues by the confirmed amount", () => {
    render(
      <PanelProvider>
        <Harness />
      </PanelProvider>,
    );
    review();
    fireEvent.click(screen.getByRole("button", { name: "Issue receipt" }));
    expect(screen.getByTestId("due")).toHaveTextContent("2300");
    expect(screen.getByTestId("collections")).toHaveTextContent("10");
    expect(screen.getByRole("heading", { name: "Receipt no. RCP-2026-1210" })).toBeInTheDocument();
  });
});
