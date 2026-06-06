# Block 12 — Utility Types

**English** · [Українська](./README.uk.md)

TypeScript ships generic helpers that transform existing types so you don't repeat
yourself. They're all built from the features in blocks 11, 13, and 14 — here you just
*use* them.

## Object reshapers

```ts
type User = { id: number; name: string; email: string; password: string };

type Draft = Partial<User>;       // every property optional
type Strict = Required<Draft>;    // every property required again
type Frozen = Readonly<User>;     // every property readonly

type PublicUser = Omit<User, "password">;        // drop keys
type Credentials = Pick<User, "email" | "password">; // keep only these
```

## `Record<K, V>`

Build a dictionary type from a key type and a value type:

```ts
type ScoreBoard = Record<string, number>;
type UsersById = Record<number, User>;
```

## Function & async helpers

```ts
function createSession(userId: number) {
  return { userId, token: `tok-${userId}` };
}
type Session = ReturnType<typeof createSession>; // { userId: number; token: string }
type Args = Parameters<typeof createSession>;     // [userId: number]

type A = Awaited<Promise<string>>; // string — unwraps a Promise
type B = NonNullable<string | null | undefined>; // string
```

`ReturnType<typeof fn>` is the everyday way to name "whatever this function returns"
without duplicating the shape.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/12-utility-types
```

1. `applyUpdate(user, patch)` — `patch` is a `Partial<User>`; return the merged user.
2. `indexById(users)` — return a `Record<number, User>` keyed by `id`.
3. `toPublicUser(user)` / `getCredentials(user)` — use `Omit` and `Pick`.
4. `refreshSession(session)` — `Session` is derived with `ReturnType<typeof
   createSession>`; return a refreshed session.

Then compare with [`solutions/`](./solutions).
