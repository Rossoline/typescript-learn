// Block 13 — Exercises
// Run tests:  npx vitest blocks/13-keyof-typeof-indexed-access

export const ROLES = {
  admin: "all",
  editor: "write",
  viewer: "read",
} as const;

export type Role = keyof typeof ROLES; // "admin" | "editor" | "viewer"
export type Permission = (typeof ROLES)[Role]; // "all" | "write" | "read"

// 1. Read a property type-safely; the return type is exactly T[K].
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  void obj;
  void key; // remove these lines once you use the parameters
  // TODO: return obj[key]
  throw new Error("Not implemented");
}

// 2. Map a role to its permission using the ROLES constant.
export function permissionFor(role: Role): Permission {
  void role; // remove this line once you use the parameter
  // TODO: return ROLES[role]
  throw new Error("Not implemented");
}

// 3. Return every permission value: ["all", "write", "read"].
export function allPermissions(): Permission[] {
  // TODO: return the three ROLES values
  throw new Error("Not implemented");
}
