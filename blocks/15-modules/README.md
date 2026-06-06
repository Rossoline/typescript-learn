# Block 15 — Modules

**English** · [Українська](./README.uk.md)

Real projects are split across files. ES modules are how those files share code with
explicit `import`/`export` — and TypeScript adds *type-only* imports on top.

## Named vs default exports

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14159;

// other.ts
import { add, PI } from "./math"; // named imports
```

A module may also have one `export default`, imported without braces. Named exports are
generally preferred — they're explicit and refactor-friendly.

## Type-only imports (`import type`)

When you import something used **only as a type**, say so. It documents intent and is
guaranteed to be erased from the JS output:

```ts
import type { Money } from "./types";

export function formatMoney(money: Money): string {
  return `${money.amount.toFixed(2)} ${money.currency}`;
}
```

## Re-exports & barrels

A *barrel* is an `index.ts` that re-exports a folder's public API from one place, so
consumers import from the package root instead of deep paths:

```ts
// index.ts
export { add, multiply } from "./math";
export { formatMoney } from "./format";
export type { Money } from "./types"; // re-export a type
```

```ts
import { add, formatMoney, type Money } from "./index";
```

## Module resolution (briefly)

This repo uses `"moduleResolution": "Bundler"`, so relative imports like `"./math"`
resolve to `math.ts` without a file extension. Imports are always relative (`./`, `../`)
or package names.

---

## Exercises

This block is a small multi-file app under [`src/`](./src). Implement each `// TODO`,
then run:

```bash
npx vitest blocks/15-modules
```

1. `src/math.ts` — implement `add` and `multiply`.
2. `src/format.ts` — implement `formatMoney`, using the **`import type { Money }`**
   that's already wired up.
3. `src/index.ts` — write the **barrel**: re-export `add`, `multiply`, `formatMoney`,
   and the `Money` type.

Then compare with [`solutions/`](./solutions).
