# Block 14 — Mapped & Conditional Types

This is where you build your *own* type transformations — the machinery behind the
utility types from block 12.

> **How this block is verified:** the exercises are **types**, not runtime functions, so
> the type checker is your test. Run `npm run typecheck` (or your IDE) and make the
> errors disappear. `npm test` alone won't catch a wrong type here.

## Mapped types

Iterate over the keys of `T` to build a new type:

```ts
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };
```

### Modifiers (`?`, `readonly`, and removing them)

Add `?`/`readonly`, or strip them with the `-` prefix:

```ts
type MyPartial<T> = { [K in keyof T]?: T[K] };       // add optional
type Concrete<T> = { [K in keyof T]-?: T[K] };        // remove optional
type Mutable<T> = { -readonly [K in keyof T]: T[K] }; // remove readonly
```

## Conditional types

`T extends U ? X : Y` chooses a type based on a relationship:

```ts
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">; // true
type B = IsString<number>; // false
```

## `infer` — capturing a type inside a conditional

`infer` introduces a type variable you can extract and reuse:

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
type C = ElementType<number[]>; // number
type D = ElementType<string>; // string (not an array → unchanged)
```

This is how `Awaited`, `ReturnType`, and `Parameters` are built.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts) and complete each `type`. Verify with:

```bash
npm run typecheck
```

1. `MyPartial<T>` and `MyReadonly<T>` — recreate the built-ins with a mapped type.
2. `Nullable<T>` — map every property to `T[K] | null`.
3. `Flatten<T>` — if `T` is an array, give its element type; otherwise `T` (use
   `infer`).

Then compare with [`solutions/`](./solutions).
