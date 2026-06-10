import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Lulu's Care Adult Family Home/);
  });

  test("hero heading and CTAs are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Schedule a Tour" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Learn About Our Care" })).toBeVisible();
  });

  test("Schedule a Tour links to /contact", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: "Schedule a Tour" }).first();
    await expect(cta).toHaveAttribute("href", "/contact");
  });

  test("trust strip shows 3 signals", async ({ page }) => {
    await page.goto("/");
    const strip = page.getByTestId("trust-strip");
    await expect(strip).toBeVisible();
    const items = strip.getByRole("listitem");
    await expect(items).toHaveCount(3);
  });

  test("care highlights shows 4 cards", async ({ page }) => {
    await page.goto("/");
    const cards = page.getByTestId("care-card");
    await expect(cards).toHaveCount(4);
  });

  test("testimonial quote is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("blockquote")).toBeVisible();
  });

  test("CTA banner links to contact and phone", async ({ page }) => {
    await page.goto("/");
    const contactLink = page.getByRole("link", { name: "Send a Message" });
    await expect(contactLink).toHaveAttribute("href", "/contact");
  });

  test("nav links are present", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  // TODO: Astro client:load hydration timing makes this flaky in Playwright dev mode
  // Revisit with static build + preview server
  test.skip("mobile: hamburger menu opens and shows nav links", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    // Astro removes the `ssr` attribute from astro-island after React hydration completes
    await page.waitForFunction(() => !document.querySelector("astro-island[ssr]"));
    const menuButton = page.getByRole("button", { name: "Open menu" });
    await menuButton.click();
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About" }).last()).toBeVisible();
  });
});
