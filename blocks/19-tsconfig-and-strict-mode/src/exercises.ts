// Block 19 — Exercises
// Run tests:  npx vitest blocks/19-tsconfig-and-strict-mode
//
// Each function must satisfy this repo's strict flags. Add a short comment naming
// the flag each one demonstrates (that's exercise 2 — "explain what changed").

// 1. Return the element at `index`, or undefined if it's out of range.
//    (noUncheckedIndexedAccess makes arr[index] already T | undefined.)
export function at<T>(arr: T[], index: number): T | undefined {
  void arr;
  void index; // remove these lines once you use the parameters
  // TODO: return arr[index]
  throw new Error("Not implemented");
}

// 2. `name` may be null. Return "Hello, stranger!" for null, else `Hello, ${name}!`.
//    (strictNullChecks forces you to handle the null case.)
export function greetMaybe(name: string | null): string {
  void name; // remove this line once you use the parameter
  // TODO: handle null, then the string case
  throw new Error("Not implemented");
}

// 3. Return the first even number, or undefined if there is none.
export function firstEven(nums: number[]): number | undefined {
  void nums; // remove this line once you use the parameter
  // TODO: find the first even value (Array.find returns number | undefined)
  throw new Error("Not implemented");
}
