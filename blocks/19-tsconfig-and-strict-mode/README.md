# Block 19 — tsconfig & strict mode

**English** · [Українська](./README.uk.md)

`tsconfig.json` controls how strict the compiler is. This repo runs with strict settings
on purpose — here you learn what each one buys you by writing code that satisfies them.

## Key compiler options

```jsonc
{
  "compilerOptions": {
    "strict": true,                    // the umbrella flag (see below)
    "noUncheckedIndexedAccess": true,  // arr[i] is T | undefined
    "noImplicitAny": true,             // every value must have a known type
    "target": "ES2022",               // JS version to emit/typecheck against
    "module": "ESNext"                // module system
  }
}
```

`strict: true` turns on a family of checks, most importantly:

- **`strictNullChecks`** — `null`/`undefined` are not silently part of every type; you
  must handle them. This is the single biggest bug-catcher.
- **`noImplicitAny`** — a parameter/variable the compiler can't infer must be annotated.
- **`strictFunctionTypes`**, **`strictBindCallApply`**, and more.

## `noUncheckedIndexedAccess`

Indexing an array or record yields `T | undefined`, because the index might be out of
range. You're forced to handle the missing case:

```ts
function at<T>(arr: T[], index: number): T | undefined {
  return arr[index]; // type is T | undefined here
}
```

## Path aliases (`paths`)

`paths` lets you import via short aliases instead of long relative chains:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@utils/*": ["src/utils/*"] }
  }
}
// import { x } from "@utils/math";  // instead of ../../../src/utils/math
```

Your bundler/test runner needs the same alias to resolve it at runtime.

---

## Exercises

The exercises live in [`src/exercises.ts`](./src/exercises.ts). Each must compile **and**
behave correctly under this repo's strict flags — implement them, explaining the relevant
flag in a comment, then run:

```bash
npx vitest blocks/19-tsconfig-and-strict-mode
npm run typecheck
```

1. `at(arr, index)` — return `T | undefined` (the `noUncheckedIndexedAccess` shape).
2. `greetMaybe(name)` — `name` is `string | null`; handle the null case
   (`strictNullChecks`).
3. `firstEven(nums)` — return the first even number, or `undefined` if there is none.

Then compare with [`solutions/`](./solutions).
