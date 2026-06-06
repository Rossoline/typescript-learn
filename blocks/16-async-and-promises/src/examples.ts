// Block 16 — Async & Promises: worked examples
// Run me:  npx tsx blocks/16-async-and-promises/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

type User = { id: number; name: string };

async function loadUser(id: number): Promise<User> {
  // Pretend this hits a database; resolve after a tick.
  await Promise.resolve();
  return { id, name: `User${id}` };
}

// Awaited<T> unwraps the promise type.
type Loaded = Awaited<ReturnType<typeof loadUser>>; // User
const _typecheck: Loaded = { id: 1, name: "Ada" };
void _typecheck;

async function main() {
  // sequential
  const a = await loadUser(1);
  console.log("sequential:", a);

  // parallel — both start at once, result is User[]
  const users = await Promise.all([loadUser(2), loadUser(3)]);
  console.log("parallel:", users);

  // error path
  try {
    await Promise.reject(new Error("boom"));
  } catch (err) {
    console.log("caught:", (err as Error).message);
  }
}

void main();
