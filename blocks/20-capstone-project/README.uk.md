# Блок 20 — Підсумковий проєкт (Capstone)

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Зведи все докупи: невелику **типізовану бібліотеку менеджера задач**, побудовану з модулів,
яка не кидає винятків через свій публічний API.

## Що ти будуєш

Бібліотека (під [`src/`](./src)) з охайним barrel-API:

- **`result.ts`** — тип `Result<T, E>` плюс конструктори `ok()` / `err()` (блоки 09, 17).
- **`task.ts`** — `Task`, чий `status` є **об'єднанням з дискримінантом**
  (`todo` / `in_progress` / `done`), з чистими переходами і `statusLabel` (блоки 05, 09).
- **`store.ts`** — узагальнений `Store<T extends { id: number }>` із `add` / `get` /
  `update` / `remove` / `list`, кожен повертає `Result` замість кидати виняток
  (блоки 11, 12, 17).
- **`index.ts`** — barrel, що ре-експортує публічний API (блок 15).

Це задіює моделі об'єднань/дискримінантів, узагальнення, звуження, утилітарні типи,
модулі й патерн помилок `Result` — за `strict`.

## Критерій завершеності

```bash
npx vitest blocks/20-capstone-project   # усі тести зелені
npm run typecheck                       # без помилок типів
```

## Складові

```ts
type TaskStatus =
  | { kind: "todo" }
  | { kind: "in_progress"; startedAt: number }
  | { kind: "done"; completedAt: number };

type Task = { id: number; title: string; status: TaskStatus };

class Store<T extends { id: number }> {
  add(item: T): Result<T, string>; // помилка, якщо id вже існує
  get(id: number): Result<T, string>;
  update(id: number, patch: Partial<Omit<T, "id">>): Result<T, string>;
  remove(id: number): Result<true, string>;
  list(): T[];
}
```

---

## Вправи

Реалізуй кожен `// TODO` у `src/result.ts`, `src/task.ts`, `src/store.ts` і barrel
`src/index.ts`. Потім запусти команди вище.

1. Конструктори `ok` / `err` у `result.ts`.
2. `createTask`, `startTask`, `completeTask`, `statusLabel` у `task.ts`.
3. Узагальнений `Store<T>` у `store.ts`, кожен метод повертає `Result`.
4. Barrel `index.ts`, що ре-експортує публічний API.

Потім порівняй з [`solutions/`](./solutions). Опісля напиши короткий README для своєї
бібліотеки — це і є фінальний результат capstone.
