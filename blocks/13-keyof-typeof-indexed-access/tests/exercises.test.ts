import { describe, it, expect, expectTypeOf } from "vitest";
import {
  getProperty,
  permissionFor,
  allPermissions,
  type Role,
  type Permission,
} from "../src/exercises";

describe("Block 13 — keyof, typeof & Indexed Access", () => {
  it("getProperty reads a property", () => {
    const user = { id: 1, name: "Ada" };
    expect(getProperty(user, "id")).toBe(1);
    expect(getProperty(user, "name")).toBe("Ada");
  });

  it("permissionFor maps roles to permissions", () => {
    expect(permissionFor("admin")).toBe("all");
    expect(permissionFor("editor")).toBe("write");
    expect(permissionFor("viewer")).toBe("read");
  });

  it("allPermissions lists every value", () => {
    expect(allPermissions()).toEqual(["all", "write", "read"]);
  });

  it("has the right types", () => {
    expectTypeOf<Role>().toEqualTypeOf<"admin" | "editor" | "viewer">();
    expectTypeOf<Permission>().toEqualTypeOf<"all" | "write" | "read">();
    expectTypeOf(getProperty<{ name: string }, "name">).returns.toEqualTypeOf<string>();
  });
});
