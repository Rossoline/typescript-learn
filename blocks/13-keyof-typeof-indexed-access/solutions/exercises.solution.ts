// Block 13 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export const ROLES = {
  admin: "all",
  editor: "write",
  viewer: "read",
} as const;

export type Role = keyof typeof ROLES;
export type Permission = (typeof ROLES)[Role];

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function permissionFor(role: Role): Permission {
  return ROLES[role];
}

export function allPermissions(): Permission[] {
  return [ROLES.admin, ROLES.editor, ROLES.viewer];
}

// Notes:
// - `K extends keyof T` constrains the key to T's keys; `T[K]` returns the precise
//   property type, so getProperty never widens.
// - `keyof typeof ROLES` derives the key union from the runtime constant, and
//   `(typeof ROLES)[Role]` is the indexed-access union of its value types.
// - Because ROLES is `as const`, its values are the literals "all" | "write" | "read",
//   so the array in allPermissions is exactly Permission[].
