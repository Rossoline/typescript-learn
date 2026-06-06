// Block 16 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type User = { id: number; name: string };

export async function loadUser(id: number): Promise<User> {
  if (id <= 0) throw new Error("invalid id");
  return { id, name: `User${id}` };
}

export function loadAll(ids: number[]): Promise<User[]> {
  // map to promises, then run them concurrently; result keeps input order.
  return Promise.all(ids.map((id) => loadUser(id)));
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  attempts: number,
): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

// Notes:
// - An async function's body returns a plain User, but the function's type is
//   Promise<User>; throwing inside it becomes a rejected promise.
// - Promise.all starts every loadUser immediately (parallel) and resolves to User[]
//   in the original order — unlike awaiting in a loop, which is sequential.
// - withRetry is generic in T so it works for any async function; it re-throws the
//   last captured error (typed `unknown`) after exhausting attempts.
