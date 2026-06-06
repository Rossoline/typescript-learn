# Блок 16 — Асинхронність і Promise

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Асинхронний код усюди; TypeScript типізує його через `Promise<T>` і `async`/`await`.

## `Promise<T>` та `async`/`await`

`async`-функція завжди повертає `Promise`. Її оголошений тип повернення «загортає»
розв'язане значення:

```ts
async function loadUser(id: number): Promise<User> {
  // ...
  return { id, name: "Ada" };
}

const user = await loadUser(1); // user: User (Promise розгорнуто через await)
```

`await` розгортає проміс; усередині функції ти працюєш зі звичайним значенням.

## `Awaited<T>`

`Awaited<T>` — це тип, який ти отримав би після `await` — він навіть розгортає вкладені
проміси:

```ts
type R = Awaited<ReturnType<typeof loadUser>>; // User
```

## Послідовно проти паралельно

`await` у циклі виконує речі **по черзі**. `Promise.all` запускає їх паралельно й
розв'язується у **типізований кортеж/масив** результатів:

```ts
// послідовно: кожен await чекає на попередній
const a = await loadUser(1);
const b = await loadUser(2);

// паралельно: обидва стартують одразу, результат — User[]
const users = await Promise.all([loadUser(1), loadUser(2)]);
```

## Типізація шляхів помилок

Відхилений проміс несе причину типу `unknown` (як `catch`). Типізуй *щасливий шлях*
типом повернення, а збої обробляй через `try/catch` чи `.catch()`:

```ts
try {
  await loadUser(-1);
} catch (err) {
  // err — unknown; звузь перед використанням (див. блок 17)
}
```

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/16-async-and-promises
```

1. `loadUser(id)` — `async`, розв'язується в `User`; відхиляється з `"invalid id"`, коли
   `id <= 0`.
2. `loadAll(ids)` — завантажити багатьох користувачів **паралельно** через `Promise.all`,
   повертаючи `Promise<User[]>`.
3. `withRetry(fn, attempts)` — узагальнена обгортка, що повторює async `fn` до `attempts`
   разів, перш ніж відхилитися з останньою помилкою.

Потім порівняй з [`solutions/`](./solutions).
