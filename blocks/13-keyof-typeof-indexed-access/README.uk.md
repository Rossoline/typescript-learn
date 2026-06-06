# Блок 13 — keyof, typeof та індексний доступ

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Три невеликі оператори, які разом дають змогу виводити типи *з інших типів і зі значень
під час виконання* — замість писати їх вручну.

## `keyof`

`keyof T` — це об'єднання ключів властивостей T:

```ts
type User = { id: number; name: string };
type UserKey = keyof User; // "id" | "name"
```

## `typeof` (у позиції типу)

`typeof value` перетворює значення під час виконання на його тип. Поєднай з `as const`,
щоб захопити літерали:

```ts
const ROLES = {
  admin: "all",
  editor: "write",
  viewer: "read",
} as const;

type Roles = typeof ROLES; // { readonly admin: "all"; ... }
```

## Типи індексного доступу (`T[K]`)

Дістати тип властивості за ключем:

```ts
type Name = User["name"]; // string
type Role = keyof typeof ROLES;        // "admin" | "editor" | "viewer"
type Permission = (typeof ROLES)[Role]; // "all" | "write" | "read"
```

`T[keyof T]` — це об'єднання **всіх типів значень**; поширена ідіома.

## Усе разом: типобезпечний доступ до властивостей

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getProperty({ id: 1, name: "Ada" }, "name"); // типізовано як string
```

Обмеження `K extends keyof T` відхиляє невідомі ключі, а `T[K]` повертає *точний* тип
властивості.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/13-keyof-typeof-indexed-access
```

1. `getProperty(obj, key)` — `<T, K extends keyof T>`, що повертає `T[K]`.
2. `permissionFor(role)` — за константою `ROLES` зіставити `Role` (з `keyof typeof
   ROLES`) з його `Permission` (індексний доступ).
3. `allPermissions()` — повернути кожне значення `Permission` (об'єднання `T[keyof T]` як
   тип елемента масиву).

Потім порівняй з [`solutions/`](./solutions).
