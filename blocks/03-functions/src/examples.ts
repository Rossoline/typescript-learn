// Block 03 — Functions: worked examples
// Run me:  npx tsx blocks/03-functions/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// 1. Parameter & return annotations.
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
console.log("clamp(15, 0, 10):", clamp(15, 0, 10)); // 10

// 2. Default parameter — optional at the call site, type inferred from the default.
function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greet("Ada"));        // Hello, Ada!
console.log(greet("Ada", "Hi"));  // Hi, Ada!

// 3. Rest parameters collect remaining args into a typed array.
function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("sum():", sum());            // 0
console.log("sum(1,2,3):", sum(1, 2, 3)); // 6

// 4. Function type expression + contextually typed callback.
type NumberOp = (n: number) => number;

function mapArray(items: number[], fn: NumberOp): number[] {
  return items.map(fn);
}
// `n` is inferred as number from NumberOp — no annotation needed here.
console.log("doubled:", mapArray([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

// 5. void return: a value-returning function is still assignable to a void callback.
function each(items: number[], fn: (n: number) => void): void {
  for (const item of items) fn(item);
}
const seen: number[] = [];
each([10, 20], (n) => seen.push(n)); // push returns a number, but that's fine here
console.log("seen:", seen); // [10, 20]
