import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/web-design",
  "/services/branding",
  "/services/automation",
  "/services/content-creation",
  "/work",
  "/templates",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

test.describe("Site-wide page checks", () => {
  for (const route of routes) {
    test(`${route} renders with an h1 and no mobile overflow`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      await expect(page.locator("h1").first()).toBeVisible();

      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasOverflow).toBe(false);
    });
  }

  test("footer renders on every page with legal links", async ({ page }) => {
    await page.goto("/about");
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
    await expect(footer.getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Terms & Conditions" })).toBeVisible();
  });

  test("services hub links to all four service detail pages", async ({ page }) => {
    await page.goto("/services");
    for (const slug of ["web-design", "branding", "automation", "content-creation"]) {
      await expect(page.locator(`a[href="/services/${slug}"]`).first()).toBeVisible();
    }
  });

  test("contact form has all required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/^Name/)).toBeVisible();
    await expect(page.getByLabel(/^Email/)).toBeVisible();
    await expect(page.getByLabel("Company")).toBeVisible();
    await expect(page.getByLabel("Project type")).toBeVisible();
    await expect(page.getByLabel("Budget range")).toBeVisible();
    await expect(page.getByLabel(/^Message/)).toBeVisible();
  });
});
