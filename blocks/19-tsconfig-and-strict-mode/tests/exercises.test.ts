import { describe, it, expect, expectTypeOf } from "vitest";
import { at, greetMaybe, firstEven } from "../src/exercises";

describe("Block 19 — tsconfig & strict mode", () => {
  it("at returns the element or undefined", () => {
    expect(at(["a", "b"], 0)).toBe("a");
    expect(at(["a", "b"], 5)).toBeUndefined();
  });

  it("greetMaybe handles null", () => {
    expect(greetMaybe(null)).toBe("Hello, stranger!");
    expect(greetMaybe("Ada")).toBe("Hello, Ada!");
  });

  it("firstEven finds the first even or undefined", () => {
    expect(firstEven([1, 3, 4, 6])).toBe(4);
    expect(firstEven([1, 3, 5])).toBeUndefined();
    expect(firstEven([])).toBeUndefined();
  });

  it("has the right types", () => {
    expectTypeOf(at<string>).returns.toEqualTypeOf<string | undefined>();
    expectTypeOf(firstEven).returns.toEqualTypeOf<number | undefined>();
  });
});
