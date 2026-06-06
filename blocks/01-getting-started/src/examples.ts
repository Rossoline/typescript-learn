// Block 01 — Getting Started: worked examples
// Run me:  npx tsx blocks/01-getting-started/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// 1. Type inference — TypeScript figures out the type from the value.
let count = 5; // inferred: number
count = count + 10;
console.log("count:", count);

// The next line would be a compile error (uncomment to see it):
// count = "not a number"; // ❌ Type 'string' is not assignable to type 'number'

// 2. Explicit annotations — required on parameters.
function double(n: number): number {
  return n * 2;
}
console.log("double(21):", double(21));

// 3. A function with a string parameter and return.
function shout(message: string): string {
  return message.toUpperCase() + "!";
}
console.log(shout("typescript is great"));

// 4. Booleans and simple logic.
function isPositive(n: number): boolean {
  return n > 0;
}
console.log("isPositive(-3):", isPositive(-3));

// 5. The compiler catches wrong argument types BEFORE running.
// double("oops"); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'
