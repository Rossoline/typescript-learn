// Verifies the reference solution types. Checked by the compiler (tsc includes
// solutions/), and run as a no-op via `npm run test:solutions`.
import { describe, it, expectTypeOf } from "vitest";
import type {
  MyPartial,
  MyReadonly,
  Nullable,
  Flatten,
} from "./exercises.solution";

type User = { id: number; name: string };

describe("Block 14 — solution", () => {
  it("types are correct", () => {
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
