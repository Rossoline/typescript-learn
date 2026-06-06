# Block 20 — Capstone Project

**English** · [Українська](./README.uk.md)

Bring it all together: a small **typed task-manager library**, built from modules, with
no exceptions thrown across its public API.

## What you're building

A library (under [`src/`](./src)) with a clean barrel API:

- **`result.ts`** — the `Result<T, E>` type plus `ok()` / `err()` constructors
  (blocks 09, 17).
- **`task.ts`** — a `Task` whose `status` is a **discriminated union**
  (`todo` / `in_progress` / `done`), with pure transitions and a `statusLabel`
  (blocks 05, 09).
- **`store.ts`** — a generic `Store<T extends { id: number }>` with `add` / `get` /
  `update` / `remove` / `list`, each returning a `Result` instead of throwing
  (blocks 11, 12, 17).
- **`index.ts`** — the barrel re-exporting the public API (block 15).

This exercises union/discriminated models, generics, narrowing, utility types,
modules, and the `Result` error pattern — under `strict`.

## Definition of done

```bash
npx vitest blocks/20-capstone-project   # all tests green
npm run typecheck                       # no type errors
```

## The pieces

```ts
type TaskStatus =
  | { kind: "todo" }
  | { kind: "in_progress"; startedAt: number }
  | { kind: "done"; completedAt: number };

type Task = { id: number; title: string; status: TaskStatus };

class Store<T extends { id: number }> {
  add(item: T): Result<T, string>; // err if the id already exists
  get(id: number): Result<T, string>;
  update(id: number, patch: Partial<Omit<T, "id">>): Result<T, string>;
  remove(id: number): Result<true, string>;
  list(): T[];
}
```

---

## Exercises

Implement every `// TODO` across `src/result.ts`, `src/task.ts`, `src/store.ts`, and the
`src/index.ts` barrel. Then run the commands above.

1. `ok` / `err` constructors in `result.ts`.
2. `createTask`, `startTask`, `completeTask`, `statusLabel` in `task.ts`.
3. The generic `Store<T>` in `store.ts`, every method returning a `Result`.
4. The barrel `index.ts` re-exporting the public API.

Then compare with [`solutions/`](./solutions). Afterwards, write a short README for your
library — that's the capstone deliverable.
