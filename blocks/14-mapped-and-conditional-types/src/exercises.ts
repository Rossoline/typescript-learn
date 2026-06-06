// Block 14 — Exercises
// Verify with:  npm run typecheck   (these are types — the compiler is your test)
//
// Replace each `TODO` placeholder below with the correct mapped/conditional type.
// While a type is still wrong, the assertions in tests/exercises.test.ts (and
// `npm run typecheck`) will report an error pointing right at it.

// 1a. Every property optional.
export type MyPartial<T> = T; // TODO: { [K in keyof T]?: T[K] }

// 1b. Every property readonly.
export type MyReadonly<T> = T; // TODO: { readonly [K in keyof T]: T[K] }

// 2. Every property becomes T[K] | null.
export type Nullable<T> = T; // TODO: { [K in keyof T]: T[K] | null }

// 3. If T is an array, its element type; otherwise T (use `infer`).
export type Flatten<T> = T; // TODO: T extends (infer U)[] ? U : T
