# Block 13 — keyof, typeof & Indexed Access

**English** · [Українська](./README.uk.md)

Three small operators that, combined, let you derive types *from other types and from
runtime values* — instead of writing them out by hand.

## `keyof`

`keyof T` is the union of T's property keys:

```ts
type User = { id: number; name: string };
type UserKey = keyof User; // "id" | "name"
```

## `typeof` (in type position)

`typeof value` turns a runtime value into its type. Combine with `as const` to capture
literals:

```ts
const ROLES = {
  admin: "all",
  editor: "write",
  viewer: "read",
} as const;

type Roles = typeof ROLES; // { readonly admin: "all"; ... }
```

## Indexed access types (`T[K]`)

Look up the type of a property by key:

```ts
type Name = User["name"]; // string
type Role = keyof typeof ROLES;        // "admin" | "editor" | "viewer"
type Permission = (typeof ROLES)[Role]; // "all" | "write" | "read"
```

`T[keyof T]` is the union of **all value types** — a common idiom.

## Putting it together: type-safe property access

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProperty({ id: 1, name: "Ada" }, "name"); // typed as string
```

The `K extends keyof T` constraint rejects unknown keys, and `T[K]` gives back the
*exact* property type.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/13-keyof-typeof-indexed-access
```

1. `getProperty(obj, key)` — `<T, K extends keyof T>` returning `T[K]`.
2. `permissionFor(role)` — given the `ROLES` constant, map a `Role` (from
   `keyof typeof ROLES`) to its `Permission` (indexed access).
3. `allPermissions()` — return every `Permission` value (the `T[keyof T]` union as an
   array element type).

Then compare with [`solutions/`](./solutions).
