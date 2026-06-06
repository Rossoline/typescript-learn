// Block 19 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export function at<T>(arr: T[], index: number): T | undefined {
  // noUncheckedIndexedAccess: arr[index] is already T | undefined, so the return
  // type matches without any assertion.
  return arr[index];
}

export function greetMaybe(name: string | null): string {
  // strictNullChecks: `name` is string | null, so we must rule out null before
  // using string methods / interpolation safely.
  if (name === null) return "Hello, stranger!";
  return `Hello, ${name}!`;
}

export function firstEven(nums: number[]): number | undefined {
  // Array.find returns number | undefined under strict — undefined when nothing
  // matches — which is exactly our return type.
  return nums.find((n) => n % 2 === 0);
}

// Notes:
// - Without noUncheckedIndexedAccess, arr[index] would be typed `T` and you'd happily
//   read past the end of the array at runtime. The flag surfaces that risk in the type.
// - Without strictNullChecks, `null` would be assignable everywhere and `name.length`
//   would compile then crash. Strict mode turns that into a compile error.
