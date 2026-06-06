// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import { loadUser, loadAll, withRetry, type User } from "./exercises.solution";

describe("Block 16 — solution", () => {
  it("loadUser resolves or rejects", async () => {
    await expect(loadUser(1)).resolves.toEqual({ id: 1, name: "User1" });
    await expect(loadUser(0)).rejects.toThrow("invalid id");
  });

  it("loadAll loads in parallel, preserving order", async () => {
    await expect(loadAll([1, 2, 3])).resolves.toEqual([
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
      { id: 3, name: "User3" },
    ]);
  });

  it("withRetry retries until success", async () => {
    let calls = 0;
    const flaky = async () => {
      calls += 1;
      if (calls < 3) throw new Error("fail");
      return "ok";
    };
    await expect(withRetry(flaky, 5)).resolves.toBe("ok");
    expect(calls).toBe(3);
  });

  it("withRetry rejects with the last error after exhausting attempts", async () => {
    const always = async () => {
      throw new Error("nope");
    };
    await expect(withRetry(always, 2)).rejects.toThrow("nope");
  });

  it("has the right types", () => {
    expectTypeOf(loadUser).returns.toEqualTypeOf<Promise<User>>();
    expectTypeOf<Awaited<ReturnType<typeof loadUser>>>().toEqualTypeOf<User>();
    expectTypeOf(withRetry<number>).returns.toEqualTypeOf<Promise<number>>();
  });
});
