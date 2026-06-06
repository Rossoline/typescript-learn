// Block 19 — tsconfig & strict mode: worked examples
// Run me:  npx tsx blocks/19-tsconfig-and-strict-mode/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// noUncheckedIndexedAccess: indexing yields T | undefined.
const names = ["Ada", "Linus"];
const third = names[2]; // type: string | undefined (there is no index 2)
console.log("third:", third ?? "(none)");

// strictNullChecks: you must handle null/undefined before using a value.
function greet(name: string | null): string {
  if (name === null) return "Hello, stranger!";
  return `Hello, ${name}!`; // here name is narrowed to string
}
console.log(greet(null));
console.log(greet("Ada"));

// noImplicitAny: a parameter the compiler can't infer must be annotated.
function double(n: number): number {
  return n * 2;
}
console.log("double:", double(21));

// Array.find returns T | undefined under strict — handle the "not found" case.
const firstBig = [1, 2, 9, 3].find((n) => n > 5);
console.log("firstBig:", firstBig ?? "none");
