// Block 14 — Mapped & Conditional Types: worked examples
// Run me:  npx tsx blocks/14-mapped-and-conditional-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

type User = { id: number; name: string };

// Mapped types with modifiers.
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };

const draft: MyPartial<User> = { name: "Ada" }; // id optional
const frozen: MyReadonly<User> = { id: 1, name: "Ada" };
const nullable: Nullable<User> = { id: null, name: "Ada" };
console.log(draft, frozen, nullable);

// Conditional type + infer.
type Flatten<T> = T extends (infer U)[] ? U : T;
type A = Flatten<number[]>; // number
type B = Flatten<string>; // string

const a: A = 42;
const b: B = "hi";
console.log("flatten:", a, b);

// These are exactly how the standard library builds helpers like ReturnType.
type MyReturnType<F> = F extends (...args: never[]) => infer R ? R : never;
type R = MyReturnType<() => boolean>; // boolean
const r: R = true;
console.log("return type:", r);
