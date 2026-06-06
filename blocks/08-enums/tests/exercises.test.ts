import { describe, it, expect } from "vitest";
import { statusLabel, isFinal, priorityWeight, OrderStatus } from "../src/exercises";

describe("Block 08 — Enums", () => {
  it("statusLabel maps each status to a label", () => {
    expect(statusLabel(OrderStatus.Pending)).toBe("Awaiting shipment");
    expect(statusLabel(OrderStatus.Shipped)).toBe("In transit");
    expect(statusLabel(OrderStatus.Delivered)).toBe("Delivered");
    expect(statusLabel(OrderStatus.Cancelled)).toBe("Cancelled");
  });

  it("isFinal detects terminal statuses", () => {
    expect(isFinal(OrderStatus.Delivered)).toBe(true);
    expect(isFinal(OrderStatus.Cancelled)).toBe(true);
    expect(isFinal(OrderStatus.Pending)).toBe(false);
    expect(isFinal(OrderStatus.Shipped)).toBe(false);
  });

  it("priorityWeight maps the literal union", () => {
    expect(priorityWeight("low")).toBe(1);
    expect(priorityWeight("medium")).toBe(2);
    expect(priorityWeight("high")).toBe(3);
  });

  it("string enum values are readable at runtime", () => {
    expect(OrderStatus.Shipped).toBe("shipped");
  });
});
