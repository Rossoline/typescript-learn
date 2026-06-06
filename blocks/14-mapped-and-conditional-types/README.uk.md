# Блок 14 — Відображені та умовні типи

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Тут ти будуєш *власні* перетворення типів — механіку, що стоїть за утилітарними типами з
блоку 12.

> **Як перевіряється цей блок:** вправи — це **типи**, а не функції часу виконання, тож
> твоїм тестом є перевірка типів. Запусти `npm run typecheck` (або свою IDE) і зроби, щоб
> помилки зникли. Самого `npm test` тут недостатньо, щоб зловити неправильний тип.

## Відображені типи (mapped types)

Пройдися ключами `T`, щоб побудувати новий тип:

```ts
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };
```

### Модифікатори (`?`, `readonly` та їх зняття)

Додай `?`/`readonly` або зніми їх префіксом `-`:

```ts
type MyPartial<T> = { [K in keyof T]?: T[K] };       // додати необов'язковість
type Concrete<T> = { [K in keyof T]-?: T[K] };        // зняти необов'язковість
type Mutable<T> = { -readonly [K in keyof T]: T[K] }; // зняти readonly
```

## Умовні типи (conditional types)

`T extends U ? X : Y` обирає тип на основі відношення:

```ts
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">; // true
type B = IsString<number>; // false
```

## `infer` — захоплення типу всередині умовного

`infer` вводить змінну типу, яку можна витягти й перевикористати:

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
type C = ElementType<number[]>; // number
type D = ElementType<string>; // string (не масив → без змін)
```

Саме так побудовані `Awaited`, `ReturnType` і `Parameters`.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts) і доповни кожен `type`. Перевір через:

```bash
npm run typecheck
```

1. `MyPartial<T>` і `MyReadonly<T>` — відтвори вбудовані відображеним типом.
2. `Nullable<T>` — відобрази кожну властивість у `T[K] | null`.
3. `Flatten<T>` — якщо `T` є масивом, дай тип його елемента; інакше `T` (використай
   `infer`).

Потім порівняй з [`solutions/`](./solutions).
