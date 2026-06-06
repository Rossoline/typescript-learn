// Block 12 — Utility Types: worked examples
// Run me:  npx tsx blocks/12-utility-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

type User = { id: number; name: string; email: string; password: string };

// Partial — everything optional, perfect for update payloads.
function update(user: User, patch: Partial<User>): User {
  return { ...user, ...patch };
}
const ada: User = { id: 1, name: "Ada", email: "ada@x.io", password: "secret" };
console.log("updated:", update(ada, { name: "Ada L." }));

// Omit / Pick — derive related shapes.
type PublicUser = Omit<User, "password">;
type Credentials = Pick<User, "email" | "password">;
const pub: PublicUser = { id: 1, name: "Ada", email: "ada@x.io" };
const creds: Credentials = { email: "ada@x.io", password: "secret" };
console.log(pub, creds);

// Record — a typed dictionary.
const scores: Record<string, number> = { alice: 10, bob: 7 };
console.log("scores.alice:", scores["alice"]);

// ReturnType — name a function's result without repeating its shape.
function createSession(userId: number) {
  return { userId, token: `tok-${userId}` };
}
type Session = ReturnType<typeof createSession>;
const session: Session = createSession(42);
console.log("session:", session);
