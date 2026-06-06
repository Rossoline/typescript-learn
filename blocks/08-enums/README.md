# Block 08 — Enums

An `enum` gives a set of named constants a single type. TypeScript has numeric and
string enums — and often a plain **literal union** is the better choice.

## String enums (recommended when you use enums)

```ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

const s: OrderStatus = OrderStatus.Shipped;
console.log(s); // "shipped" — readable at runtime
```

String enum values are stable and self-describing in logs.

## Numeric enums & reverse mapping

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
}
Direction.Up;        // 0
Direction[0];        // "Up"  — numeric enums get a reverse map
```

String enums do **not** get a reverse map.

## `const enum`

A `const enum` is inlined at compile time (no runtime object). It's faster but has
caveats under tooling like `isolatedModules`, so prefer a regular enum or a union
unless you have a measured reason.

## Exhaustiveness with `never`

A `switch` over every enum member can prove it's exhaustive: assign the value to
`never` in the `default`, and the compiler errors if you ever add a member you forgot
to handle.

```ts
function isFinal(status: OrderStatus): boolean {
  switch (status) {
    case OrderStatus.Delivered:
    case OrderStatus.Cancelled:
      return true;
    case OrderStatus.Pending:
    case OrderStatus.Shipped:
      return false;
    default: {
      const _exhaustive: never = status; // ❌ here if a case is missing
      return _exhaustive;
    }
  }
}
```

## Enum vs literal union

Often a union of string literals does the same job with less machinery and no runtime
object:

```ts
type Priority = "low" | "medium" | "high";
```

Prefer a **union** for simple closed sets; reach for an **enum** when you want a named
namespace of values or numeric/reverse-mapping behavior.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/08-enums
```

1. `statusLabel(status)` — map each `OrderStatus` to a human label.
2. `isFinal(status)` — an **exhaustive** handler (with a `never` default) returning
   whether the status is terminal (`Delivered`/`Cancelled`).
3. `priorityWeight(priority)` — same idea modeled as a **literal union** `Priority`
   instead of an enum: `low → 1`, `medium → 2`, `high → 3`.

Then compare with [`solutions/`](./solutions).
