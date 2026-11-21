import { test, expect } from "@playwright/test";

// Visitor (anonymous) role journeys over the marketing site — the Playwright
// replacement for the TanStack app-routing smoke test (docs/24 Phase 4).

test.describe("Visitor — marketing site", () => {
  test("landing renders with the SEO package", async ({ page }) => {
    await page.goto("/");

    // The route matches a real page (not the 404 fallback) with one hero h1.
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Empowering");
    await expect(page).toHaveTitle(/Biddakool/);

    // Canonical URL is emitted for the landing (absolute, root path; Next
    // normalizes the metadataBase join, so don't pin slash or domain here).
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    await expect(canonical).toHaveAttribute("href", /^https:\/\/[^/]+\/?$/);

    // Meta description and JSON-LD structured data (Organization/FAQPage graph).
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);
    expect(await jsonLd.textContent()).toContain("FAQPage");
  });

  test("robots.txt keeps crawlers out of the panel and points at the sitemap", async ({
    request,
  }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    const body = await robots.text();
    expect(body).toContain("Disallow: /dashboard");
    expect(body).toContain("/sitemap.xml");
  });

  test("sitemap.xml lists the public routes", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const body = await sitemap.text();
    expect(body).toContain("<loc>");
    expect(body).not.toContain("/dashboard");
  });

  test("sign-in is reachable from the landing", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /sign in/i }).first().click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("heading", { name: "Welcome back." })).toBeVisible();
  });

  test("unknown routes render the branded 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByRole("heading", { name: "404", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });
});
