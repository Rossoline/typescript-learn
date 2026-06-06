// Block 16 — Exercises
// Run tests:  npx vitest blocks/16-async-and-promises

export type User = { id: number; name: string };

// 1. Resolve to a User { id, name: `User${id}` }. Reject "invalid id" if id <= 0.
export async function loadUser(id: number): Promise<User> {
  void id; // remove this line once you use the parameter
  // TODO: validate id, then return the user
  throw new Error("Not implemented");
}

// 2. Load every id in parallel and return the users in the same order.
export function loadAll(ids: number[]): Promise<User[]> {
  void ids; // remove this line once you use the parameter
  // TODO: Promise.all over loadUser
  throw new Error("Not implemented");
}

// 3. Retry an async function up to `attempts` times; reject with the last error
//    if every attempt fails.
export async function withRetry<T>(
  fn: () => Promise<T>,
  attempts: number,
): Promise<T> {
  void fn;
  void attempts; // remove these lines once you use the parameters
  // TODO: loop, try/await fn, remember the last error, throw it if all fail
  throw new Error("Not implemented");
}
