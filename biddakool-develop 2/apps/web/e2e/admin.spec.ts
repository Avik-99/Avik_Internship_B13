import { expect, test, type Page } from "@playwright/test";

// Administrator role journey through the demo panel (mock data only):
// sign-in gate → fees collection with receipt confirmation → state surviving
// navigation → exam publication with confirmation → language → sign-out.
// Replaces the TanStack app-routing test per docs/24 Phase 4.

// Demo sign-in accepts any non-empty credentials — a UI gate, not auth.
async function signIn(page: Page) {
  await page.goto("/login");
  await page.getByLabel("Email address").fill("admin@demo.example");
  await page.getByLabel("Password").fill("demo-password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
}

test.describe("Administrator — demo panel", () => {
  test("dashboard redirects anonymous visitors to sign-in", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("heading", { name: "Welcome back." })).toBeVisible();
  });

  test("fees, exams and session journeys", async ({ page }) => {
    await signIn(page);

    // Dashboard home rendered inside the shell.
    await expect(page.getByRole("heading", { name: "Good morning, Admin" })).toBeVisible();

    // --- Fees: collect with a confirmation before the receipt is issued ---
    await page.locator("nav").getByRole("link", { name: "Fees" }).click();
    await expect(page.getByRole("heading", { name: "Fees", exact: true })).toBeVisible();
    await page.getByRole("button", { name: "New collection" }).click();
    const dialog = page.getByRole("dialog");
    await dialog.getByLabel("Student").selectOption("BDS-1001");
    await dialog.getByLabel("Amount (৳)").fill("100");
    await dialog.getByRole("button", { name: "Review collection" }).click();
    await expect(dialog.getByRole("heading", { name: "Confirm collection" })).toBeVisible();
    await dialog.getByRole("button", { name: "Issue receipt" }).click();
    await expect(
      dialog.getByRole("heading", { name: "Receipt no. RCP-2026-1210" }),
    ).toBeVisible();
    await dialog.getByRole("button", { name: "Completed" }).click();

    // Demo edits survive client-side navigation (provider keeps panel state).
    await page.locator("nav").getByRole("link", { name: "Dashboard" }).click();
    await expect(page.getByRole("heading", { name: "Good morning, Admin" })).toBeVisible();
    await page.locator("nav").getByRole("link", { name: "Fees" }).click();
    await expect(page.getByText("RCP-2026-1210").first()).toBeVisible();

    // --- Exams: publishing requires confirmation on a completed exam ---
    await page.locator("nav").getByRole("link", { name: "Exams" }).click();
    await expect(page.getByRole("heading", { name: "Exams", exact: true })).toBeVisible();
    await page.getByRole("button", { name: "View results" }).first().click();
    await expect(page.getByRole("heading", { name: "Mid-term assessment" })).toBeVisible();
    await page.getByRole("button", { name: "Publish results" }).click();
    const confirmDialog = page.getByRole("dialog");
    await expect(confirmDialog.getByRole("heading", { name: "Confirm publication" })).toBeVisible();
    await confirmDialog.getByRole("button", { name: "Publish results" }).click();
    await expect(page.getByText("Published").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Publish results" })).toBeDisabled();

    // --- Language toggle switches the panel to Bangla ---
    await page.getByRole("button", { name: "বাং" }).click();
    await expect(page.locator("div.panel-app[lang='bn']")).toBeVisible();
    await page.getByRole("button", { name: "EN", exact: true }).click();
    await expect(page.locator("div.panel-app[lang='en']")).toBeVisible();

    // --- Sign out ends the demo session ---
    await page.getByRole("button", { name: "Account menu" }).click();
    await page.getByRole("menuitem", { name: "Sign out" }).click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login$/);
  });
});
