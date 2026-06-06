// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  applyUpdate,
  indexById,
  toPublicUser,
  getCredentials,
  refreshSession,
  type User,
  type PublicUser,
  type Credentials,
  type Session,
} from "./exercises.solution";

const ada: User = { id: 1, name: "Ada", email: "ada@x.io", password: "secret" };
const bob: User = { id: 2, name: "Bob", email: "bob@x.io", password: "hunter2" };

describe("Block 12 — solution", () => {
  it("applyUpdate merges a partial patch", () => {
    expect(applyUpdate(ada, { name: "Ada L." })).toEqual({ ...ada, name: "Ada L." });
    expect(applyUpdate(ada, {})).toEqual(ada);
  });

  it("indexById keys users by id", () => {
    expect(indexById([ada, bob])).toEqual({ 1: ada, 2: bob });
  });

  it("toPublicUser drops the password", () => {
    expect(toPublicUser(ada)).toEqual({ id: 1, name: "Ada", email: "ada@x.io" });
    expect(toPublicUser(ada)).not.toHaveProperty("password");
  });

  it("getCredentials keeps only email and password", () => {
    expect(getCredentials(ada)).toEqual({ email: "ada@x.io", password: "secret" });
  });

  it("refreshSession regenerates the token", () => {
    expect(refreshSession({ userId: 5, token: "old", createdAt: 9 })).toEqual({
      userId: 5,
      token: "tok-5",
      createdAt: 9,
    });
  });

  it("has the right types", () => {
    expectTypeOf<PublicUser>().toEqualTypeOf<{
      id: number;
      name: string;
      email: string;
    }>();
    expectTypeOf<Credentials>().toEqualTypeOf<{ email: string; password: string }>();
    expectTypeOf<Session>().toEqualTypeOf<{
      userId: number;
      token: string;
      createdAt: number;
    }>();
  });
});
