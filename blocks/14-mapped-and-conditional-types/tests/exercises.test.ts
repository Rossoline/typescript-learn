// This block's exercises are TYPES. The assertions below are checked by the
// compiler — run `npm run typecheck`. At runtime they are no-ops.
import { describe, it, expectTypeOf } from "vitest";
import type { MyPartial, MyReadonly, Nullable, Flatten } from "../src/exercises";

type User = { id: number; name: string };

describe("Block 14 — Mapped & Conditional Types", () => {
  it("types are correct (verified by the type checker)", () => {
    expectTypeOf<MyPartial<User>>().toEqualTypeOf<{ id?: number; name?: string }>();
    expectTypeOf<MyReadonly<User>>().toEqualTypeOf<{
      readonly id: number;
      readonly name: string;
    }>();
    expectTypeOf<Nullable<User>>().toEqualTypeOf<{
      id: number | null;
      name: string | null;
    }>();
    expectTypeOf<Flatten<number[]>>().toEqualTypeOf<number>();
    expectTypeOf<Flatten<string>>().toEqualTypeOf<string>();
  });
});
