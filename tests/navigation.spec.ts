import { test, expect } from "@playwright/test";

test.describe("Javé Agency marketing site", () => {
  test("navbar renders with logo and links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("banner").getByText("Agency")).toBeVisible();
  });

  test("mobile menu opens and closes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Burger menu only renders on mobile viewport");
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: "Menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Work", exact: true }),
    ).toBeVisible();
    await menuButton.click();
  });

  test("hero CTA buttons are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Book a Strategy Call" })).toBeVisible();
    await expect(page.getByRole("link", { name: "View Selected Work" })).toBeVisible();
  });

  test("main sections exist", async ({ page }) => {
    await page.goto("/");
    for (const id of ["work", "services", "process", "faq", "contact"]) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  });

  test("no horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasOverflow).toBe(false);
  });
});
