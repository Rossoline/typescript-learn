// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect } from "vitest";
import { add, multiply } from "./math";
import { formatMoney } from "./format";
import * as api from "./index";

const barrel = api as Record<string, unknown>;

describe("Block 15 — solution", () => {
  it("math module exports add and multiply", () => {
    expect(add(2, 3)).toBe(5);
    expect(multiply(2, 3)).toBe(6);
  });

  it("format module uses the Money type", () => {
    expect(formatMoney({ amount: 9.5, currency: "USD" })).toBe("9.50 USD");
    expect(formatMoney({ amount: 1000, currency: "EUR" })).toBe("1000.00 EUR");
  });

  it("index barrel re-exports the public API", () => {
    expect(typeof barrel.add).toBe("function");
    expect(typeof barrel.multiply).toBe("function");
    expect(typeof barrel.formatMoney).toBe("function");
  });
});
