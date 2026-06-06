# CLAUDE.md — Authoring guide for this course

This repo is **"TypeScript in a Month"**: 20 hands-on, test-driven blocks under
[`blocks/`](./blocks). The day-by-day curriculum is in [PLAN.md](./PLAN.md).

Blocks `01` and `02` are the **reference implementation** of the template below.
When generating or editing any block (03–20), match them exactly.

## Block file layout

Every block folder `blocks/NN-name/` contains **exactly** these files:

```
blocks/NN-name/
  README.md                            # theory + the list of exercises
  src/examples.ts                      # runnable worked examples (npx tsx)
  src/exercises.ts                     # student stubs: throw "Not implemented"
  tests/exercises.test.ts              # student-facing tests  (npm test)
  solutions/exercises.solution.ts      # reference answers
  solutions/exercises.solution.test.ts # solution check (npm run test:solutions)
```

## Conventions (follow per file)

- **`src/exercises.ts`** — each task is an `export function` with **fully annotated
  parameters and return type already filled in**; the body is a stub. Use the idiom:
  ```ts
  export function add(a: number, b: number): number {
    void a;
    void b; // remove these lines once you use the parameters
    // TODO: return a + b
    throw new Error("Not implemented");
  }
  ```
  The `void x;` lines are required because `noUnusedParameters` is on. Keep a short
  `// TODO:` hint describing the intended implementation.

- **`solutions/exercises.solution.ts`** — the working implementation, same signatures,
  plus a short `// Notes:` comment block explaining the *why* (the typing lesson).

- **`tests/exercises.test.ts`** — imports from `../src/exercises`. Readable, real
  assertions (the student reads these). One `describe("Block NN — Topic", ...)`.

- **`solutions/exercises.solution.test.ts`** — imports from `./exercises.solution`,
  duplicates the same cases. This is the **author/CI guarantee** that the reference
  answers actually pass. It is intentionally **excluded** from `npm test`.

- **Type-level tests** — when a block's lesson is about *types* (tuples, `readonly`,
  generics, utility/mapped/conditional types, `keyof`, etc.), add `expectTypeOf`
  assertions in an `it("has the right types", ...)`. Check **signatures, not calls**,
  so they pass independently of the runtime stub:
  ```ts
  expectTypeOf(firstAndLast).returns.toEqualTypeOf<[string, string]>();
  ```
  Purely behavioral blocks (e.g. plain numeric functions) use only `expect`.

- **`README.md`** — explain the topic with small code samples and `// ❌` error
  examples, then a numbered `## Exercises` list matching the functions in
  `src/exercises.ts`. End by pointing at `solutions/`.

## Verifying a block (definition of done)

A block is complete when **all** of these pass:

```bash
npm run typecheck          # tsc --noEmit, zero errors (covers blocks/**/*.ts)
npm run test:solutions     # the reference solutions are GREEN
```

`npm test` (student run) will show the new block's behavioral exercises **failing**
with `Not implemented` — that is correct and expected; the student makes them green.
Type-level `it("has the right types")` should pass immediately (it checks signatures).

**Exception — type-only blocks (e.g. block 14):** when the exercise is to *write a
type* (mapped/conditional types), the compiler is the test. The student `exercises.ts`
ships intentionally-wrong placeholder types, so `npm run typecheck` reports errors
**localized to that block's `tests/exercises.test.ts`** until the student fixes them —
this is the intended signal, analogous to a failing runtime test. The matching
`solutions/` types are correct, so tsc stays clean for everything else. When verifying
later blocks, filter these known errors:
`npx tsc --noEmit 2>&1 | grep -v "14-mapped-and-conditional-types/tests"`.

## Config notes (don't regress these)

- `vitest.config.ts` includes only `blocks/**/tests/*.test.ts` (student run).
- `vitest.solutions.config.ts` includes only `blocks/**/solutions/*.solution.test.ts`.
- `tsconfig.json` is strict, incl. `noUncheckedIndexedAccess` and `noUnusedParameters`.
  Indexing an array yields `T | undefined`; use `!` (with a comment) where you've
  guaranteed presence, as in block 02's `firstAndLast`.
- **Always start `examples.ts` with `export {};`** so it's a module. Otherwise it's a
  global script: its top-level type/class names clash both with DOM globals (`Plugin`,
  `Event`, `name`, …) and with identically-named declarations in *other* blocks'
  examples (e.g. two `User` types). `src/exercises.ts` and `solutions/*.ts` already
  export, so they're modules and safe.
