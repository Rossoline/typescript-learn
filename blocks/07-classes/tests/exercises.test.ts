import { describe, it, expect } from "vitest";
import {
  BankAccount,
  Circle,
  Rectangle,
  Member,
  Temperature,
  Shape,
} from "../src/exercises";

describe("Block 07 — Classes", () => {
  it("BankAccount deposits, withdraws and validates", () => {
    const acc = new BankAccount(100);
    acc.deposit(50);
    expect(acc.balance).toBe(150);
    acc.withdraw(30);
    expect(acc.balance).toBe(120);
    expect(() => acc.deposit(-1)).toThrow("amount must be positive");
    expect(() => acc.withdraw(0)).toThrow("amount must be positive");
    expect(() => acc.withdraw(999)).toThrow("insufficient funds");
  });

  it("Circle and Rectangle implement area() and are Shapes", () => {
    const circle = new Circle(2);
    expect(circle.area()).toBeCloseTo(Math.PI * 4, 10);
    expect(circle.kind).toBe("circle");
    expect(circle).toBeInstanceOf(Shape);

    const rect = new Rectangle(3, 4);
    expect(rect.area()).toBe(12);
    expect(rect.kind).toBe("rectangle");
  });

  it("Member implements Identified via parameter properties", () => {
    const m = new Member(7, "Ada");
    expect(m.id).toBe(7);
    expect(m.name).toBe("Ada");
  });

  it("Temperature exposes fahrenheit via a getter", () => {
    expect(new Temperature(100).fahrenheit).toBe(212);
    expect(new Temperature(0).fahrenheit).toBe(32);
  });
});
