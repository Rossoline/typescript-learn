// Block 02 — Basic Types: worked examples
// Run me:  npx tsx blocks/02-basic-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// Primitives
const title: string = "TypeScript";
const year: number = 2026;
const isFun: boolean = true;
console.log(title, year, isFun);

// Arrays — two syntaxes
const nums: number[] = [1, 2, 3];
const names: Array<string> = ["Ada", "Linus"];
console.log(nums, names);

// Tuple — fixed length, known type per position
const point: [number, number] = [10, 20];
console.log("x:", point[0], "y:", point[1]);

// readonly array — mutation methods are gone
const frozen: readonly number[] = [1, 2, 3];
console.log("frozen:", frozen);
// frozen.push(4); // ❌ would not compile

// unknown forces you to narrow before use
function logIt(value: unknown): void {
  if (typeof value === "string") {
    console.log("string of length", value.length);
  } else if (typeof value === "number") {
    console.log("number doubled:", value * 2);
  } else {
    console.log("something else");
  }
}
logIt("hello");
logIt(21);
logIt(true);

// never — a function that never returns normally
function fail(message: string): never {
  throw new Error(message);
}
void fail; // referenced so the example compiles cleanly
