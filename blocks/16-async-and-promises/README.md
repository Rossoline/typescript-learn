# Block 16 — Async & Promises

Async code is everywhere; TypeScript types it through `Promise<T>` and `async`/`await`.

## `Promise<T>` and `async`/`await`

An `async` function always returns a `Promise`. Its declared return type wraps the
resolved value:

```ts
async function loadUser(id: number): Promise<User> {
  // ...
  return { id, name: "Ada" };
}

const user = await loadUser(1); // user: User (the Promise is unwrapped by await)
```

`await` unwraps the promise; inside the function you work with the plain value.

## `Awaited<T>`

`Awaited<T>` is the type you'd get after `await`-ing — it even unwraps nested promises:

```ts
type R = Awaited<ReturnType<typeof loadUser>>; // User
```

## Sequencing vs. parallelizing

`await` in a loop runs things **one at a time**. `Promise.all` runs them concurrently
and resolves to a **typed tuple/array** of results:

```ts
// sequential: each await waits for the previous
const a = await loadUser(1);
const b = await loadUser(2);

// parallel: both start immediately, result is User[]
const users = await Promise.all([loadUser(1), loadUser(2)]);
```

## Typing error paths

A rejected promise carries an `unknown` reason (like `catch`). Type the *happy path*
with the return type, and handle failures with `try/catch` or `.catch()`:

```ts
try {
  await loadUser(-1);
} catch (err) {
  // err is unknown — narrow before using it (see block 17)
}
```

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/16-async-and-promises
```

1. `loadUser(id)` — `async`, resolves to a `User`; reject with `"invalid id"` when
   `id <= 0`.
2. `loadAll(ids)` — load many users **in parallel** with `Promise.all`, returning
   `Promise<User[]>`.
3. `withRetry(fn, attempts)` — a generic wrapper that retries an async `fn` up to
   `attempts` times before rejecting with the last error.

Then compare with [`solutions/`](./solutions).
