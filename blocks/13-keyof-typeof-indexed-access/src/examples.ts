// Block 13 — keyof, typeof & Indexed Access: worked examples
// Run me:  npx tsx blocks/13-keyof-typeof-indexed-access/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

type User = { id: number; name: string };

// keyof — the union of property keys.
type UserKey = keyof User; // "id" | "name"
const key: UserKey = "name";
console.log("key:", key);

// Indexed access — the type of a property by key.
type NameType = User["name"]; // string
const aName: NameType = "Ada";
console.log("name:", aName);

// typeof + as const — capture a runtime constant's literal types.
const ROLES = {
  admin: "all",
  editor: "write",
  viewer: "read",
} as const;

type Role = keyof typeof ROLES; // "admin" | "editor" | "viewer"
type Permission = (typeof ROLES)[Role]; // "all" | "write" | "read"

const role: Role = "editor";
const perm: Permission = ROLES[role]; // "write"
console.log(role, "->", perm);

// Type-safe property access.
function getProperty<T, K extends keyof T>(obj: T, k: K): T[K] {
  return obj[k];
}
console.log("id:", getProperty({ id: 1, name: "Ada" }, "id"));
