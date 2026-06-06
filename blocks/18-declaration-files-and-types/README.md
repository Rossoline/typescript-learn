# Block 18 — Declaration Files & @types

**English** · [Українська](./README.uk.md)

A `.d.ts` file contains **types only** — no runtime code. It's how TypeScript learns
the shape of JavaScript it can't see into: compiled libraries, untyped npm packages,
or a plain `.js` file in your own project.

> **How this block is verified:** declarations are types, so the **type checker** is the
> test. Run `npm run typecheck`. The library code in `legacy.js` runs fine either way —
> what you're adding is the *types* the rest of your code relies on.

## `@types/*` packages

Many libraries ship their own types. Those that don't often have community types on npm:

```bash
npm i lodash
npm i -D @types/lodash   # types live in a separate package
```

TypeScript finds them automatically under `node_modules/@types`.

## Typing a local JS module with a sibling `.d.ts`

Given an untyped `legacy.js`:

```js
export function shout(message) {
  return message.toUpperCase() + "!";
}
export const LANG = "js";
```

…write a `legacy.d.ts` next to it. Importers pick up these types automatically:

```ts
// legacy.d.ts
export function shout(message: string): string;
export const LANG: string;
```

A `.d.ts` uses **declarations** (no bodies): `export function f(x: T): R;`,
`export const c: T;`, `export interface I { ... }`.

## Ambient declarations & global augmentation (further reading)

- `declare module "some-lib" { ... }` types a whole untyped package by name.
- `declare global { interface Window { myFlag: boolean } }` augments a global. Use
  sparingly — globals are shared by every file in the program.

---

## Exercises

The untyped module lives at [`src/legacy.js`](./src/legacy.js). Write its types in
[`src/legacy.d.ts`](./src/legacy.d.ts), then verify:

```bash
npm run typecheck
```

1. Declare `shout(message: string): string` in `legacy.d.ts`.
2. Declare `LANG` as a `string`.
3. Confirm the typed imports in `tests/exercises.test.ts` compile and run.

Then compare with [`solutions/`](./solutions).
