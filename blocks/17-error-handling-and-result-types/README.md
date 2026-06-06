# Block 17 — Error Handling & Result Types

**English** · [Українська](./README.uk.md)

Two complementary ways to deal with failure: idiomatic `try/catch`, and the typed
`Result` pattern that makes failure part of the return type.

## Caught errors are `unknown`

Under `strict`, the variable in a `catch` is `unknown` — you can throw anything in JS,
so TypeScript won't assume it's an `Error`. Narrow before using it:

```ts
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown error";
}
```

## Custom error classes

Subclass `Error` to carry extra context and enable `instanceof` checks:

```ts
class ValidationError extends Error {
  constructor(public field: string) {
    super(`Invalid field: ${field}`);
    this.name = "ValidationError";
  }
}
```

## The `Result<T, E>` pattern

Instead of throwing, return a value that *encodes* success or failure. Callers must
check `ok` before reaching the data — the compiler enforces it:

```ts
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return { ok: false, error: "division by zero" };
  return { ok: true, value: a / b };
}

const r = divide(10, 2);
if (r.ok) {
  console.log(r.value); // narrowed to the success branch
} else {
  console.log(r.error);
}
```

`Result` is a discriminated union (block 09) — failures are visible in the type, never
forgotten in an un-caught throw.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/17-error-handling-and-result-types
```

1. `tryParse(json)` — return `Result<unknown>`: `JSON.parse` on success, an `Error`
   result on failure (never throws).
2. `divide(a, b)` — return `Result<number, string>`, erroring on divide-by-zero.
3. `getErrorMessage(error)` — narrow an `unknown` caught error to a string message.

Then compare with [`solutions/`](./solutions).
