# Блок 12 — Утилітарні типи (Utility Types)

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

TypeScript постачає узагальнені помічники, що перетворюють наявні типи, щоб ти не
повторювався. Усі вони побудовані на можливостях із блоків 11, 13 і 14 — тут ти просто
*користуєшся* ними.

## Перетворювачі форми об'єктів

```ts
type User = { id: number; name: string; email: string; password: string };

type Draft = Partial<User>;       // кожна властивість необов'язкова
type Strict = Required<Draft>;    // кожна властивість знову обов'язкова
type Frozen = Readonly<User>;     // кожна властивість readonly

type PublicUser = Omit<User, "password">;        // прибрати ключі
type Credentials = Pick<User, "email" | "password">; // лишити тільки ці
```

## `Record<K, V>`

Будує тип словника з типу ключа й типу значення:

```ts
type ScoreBoard = Record<string, number>;
type UsersById = Record<number, User>;
```

## Помічники для функцій та async

```ts
function createSession(userId: number) {
  return { userId, token: `tok-${userId}` };
}
type Session = ReturnType<typeof createSession>; // { userId: number; token: string }
type Args = Parameters<typeof createSession>;     // [userId: number]

type A = Awaited<Promise<string>>; // string — розгортає Promise
type B = NonNullable<string | null | undefined>; // string
```

`ReturnType<typeof fn>` — щоденний спосіб назвати «те, що повертає ця функція», не
дублюючи форму.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/12-utility-types
```

1. `applyUpdate(user, patch)` — `patch` має тип `Partial<User>`; повернути злитого
   користувача.
2. `indexById(users)` — повернути `Record<number, User>` з ключем за `id`.
3. `toPublicUser(user)` / `getCredentials(user)` — використати `Omit` і `Pick`.
4. `refreshSession(session)` — `Session` виведено через `ReturnType<typeof
   createSession>`; повернути оновлену сесію.

Потім порівняй з [`solutions/`](./solutions).
