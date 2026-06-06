// Block 12 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type PublicUser = Omit<User, "password">;
export type Credentials = Pick<User, "email" | "password">;

export function createSession(userId: number) {
  return { userId, token: `tok-${userId}`, createdAt: 0 };
}
export type Session = ReturnType<typeof createSession>;

export function applyUpdate(user: User, patch: Partial<User>): User {
  return { ...user, ...patch };
}

export function indexById(users: User[]): Record<number, User> {
  const map: Record<number, User> = {};
  for (const user of users) {
    map[user.id] = user;
  }
  return map;
}

export function toPublicUser(user: User): PublicUser {
  // Build the public shape explicitly (omitting `password`).
  return { id: user.id, name: user.name, email: user.email };
}

export function getCredentials(user: User): Credentials {
  return { email: user.email, password: user.password };
}

export function refreshSession(session: Session): Session {
  return { ...session, token: `tok-${session.userId}` };
}

// Notes:
// - Partial<User> makes every field optional, so a patch can carry any subset.
// - Record<number, User> types an id -> user dictionary.
// - `Omit<User, "password">` drops a key from the type; we build the value to match.
//   (You could also `const { password: _p, ...rest } = user` and return rest.)
// - Pick<User, "email" | "password"> keeps exactly those two keys.
// - Session = ReturnType<typeof createSession> stays in sync with the function.
