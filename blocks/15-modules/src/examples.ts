// Block 15 — Modules: worked examples
// Run me:  npx tsx blocks/15-modules/src/examples.ts
//
// This file demonstrates module syntax inline. In a real app each section would
// live in its own file and be wired together with import/export.
export {}; // make this a module

// --- Named exports (imagine this is math.ts) ---
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14159;

// --- A type (imagine this is types.ts) ---
export type Money = { amount: number; currency: string };

// --- A function using a type (imagine this is format.ts) ---
// In another file you'd write: import type { Money } from "./types";
export function formatMoney(money: Money): string {
  return `${money.amount.toFixed(2)} ${money.currency}`;
}

console.log("add:", add(2, 3));
console.log("PI:", PI);
console.log("money:", formatMoney({ amount: 9.5, currency: "USD" }));

// A barrel (index.ts) would then collect these:
//   export { add, PI } from "./math";
//   export { formatMoney } from "./format";
//   export type { Money } from "./types";
