# Блок 11 — Узагальнення (Generics)

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Узагальнення (generics) дають змогу функції, класу чи типу працювати над *будь-яким*
типом, зберігаючи зв'язок між входом і виходом. Це спосіб писати багаторазовий код, не
скочуючись до `any`.

## Узагальнені функції

Параметр типу `<T>` — це заповнювач, який заповнює той, хто викликає (або виведення):

```ts
function identity<T>(value: T): T {
  return value;
}

identity(42);      // T = number, повертає number
identity("hi");    // T = string, повертає string
```

`<T>` рідко передають явно — TypeScript **виводить** його з аргументів.

## Обмеження (`extends`)

Обмеж параметр типу, щоб можна було покладатися на певну структуру:

```ts
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest([1, 2], [1]); // ок — масиви мають length
// longest(1, 2);     // ❌ number не має `length`
```

Обмеження через `keyof` особливо поширені:

```ts
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // тип повернення — точно тип цієї властивості
}
```

## Узагальнені класи

```ts
class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
}
const b = new Box(123); // Box<number>
```

## Кілька параметрів типу

```ts
function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}
```

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/11-generics
```

1. `identity(value)` і `first(items)` — узагальнені функції. `first` повертає
   `T | undefined` (масив може бути порожнім).
2. `Stack<T>` — узагальнений клас із `push`, `pop`, `peek` і геттером `size`.
3. `pluck(obj, key)` — обмежений `<T, K extends keyof T>`, повертає `T[K]`.
4. `merge(a, b)` — поєднати два об'єкти в `A & B`.

Потім порівняй з [`solutions/`](./solutions).
