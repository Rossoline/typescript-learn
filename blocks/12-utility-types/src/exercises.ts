// Block 12 — Exercises
// Run tests:  npx vitest blocks/12-utility-types

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type PublicUser = Omit<User, "password">;
export type Credentials = Pick<User, "email" | "password">;

// Given: Session is derived from createSession's return type.
export function createSession(userId: number) {
  return { userId, token: `tok-${userId}`, createdAt: 0 };
}
export type Session = ReturnType<typeof createSession>;

// 1. Merge a partial patch onto a user (patch wins).
export function applyUpdate(user: User, patch: Partial<User>): User {
  void user;
  void patch; // remove these lines once you use the parameters
  // TODO: return { ...user, ...patch }
  throw new Error("Not implemented");
}

// 2. Build a lookup keyed by each user's id.
export function indexById(users: User[]): Record<number, User> {
  void users; // remove this line once you use the parameter
  // TODO: return a Record<number, User>
  throw new Error("Not implemented");
}

// 3a. Drop the password field.
export function toPublicUser(user: User): PublicUser {
  void user; // remove this line once you use the parameter
  // TODO: return the user without `password`
  throw new Error("Not implemented");
}

// 3b. Keep only the credential fields.
export function getCredentials(user: User): Credentials {
  void user; // remove this line once you use the parameter
  // TODO: return { email, password }
  throw new Error("Not implemented");
}

// 4. Return a refreshed session: same userId/createdAt, regenerated token.
export function refreshSession(session: Session): Session {
  void session; // remove this line once you use the parameter
  // TODO: return a new Session with token `tok-<userId>`
  throw new Error("Not implemented");
}
