// Block 14 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type MyPartial<T> = { [K in keyof T]?: T[K] };

export type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type Flatten<T> = T extends (infer U)[] ? U : T;

// Notes:
// - A mapped type `{ [K in keyof T]: ... }` walks every key of T; adding `?` or
//   `readonly` applies that modifier to each resulting property.
// - Nullable keeps each key required but widens its value to `T[K] | null`.
// - Flatten is a conditional type: `T extends (infer U)[]` matches any array and binds
//   its element type to U; non-arrays fall through to T unchanged.
