# Block 11 — Generics

**English** · [Українська](./README.uk.md)

Generics let a function, class, or type work over *any* type while keeping the
relationship between inputs and outputs. They're how you write reusable code without
falling back to `any`.

## Generic functions

A type parameter `<T>` is a placeholder the caller (or inference) fills in:

```ts
function identity<T>(value: T): T {
  return value;
}

identity(42);      // T = number, returns number
identity("hi");    // T = string, returns string
```

You rarely pass `<T>` explicitly — TypeScript **infers** it from the arguments.

## Constraints (`extends`)

Constrain a type parameter so you can rely on some structure:

```ts
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest([1, 2], [1]); // ok — arrays have length
// longest(1, 2);     // ❌ number has no `length`
```

`keyof` constraints are especially common:

```ts
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // return type is exactly the property's type
}
```

## Generic classes

```ts
class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
}
const b = new Box(123); // Box<number>
```

## Multiple type parameters

```ts
function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}
```

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/11-generics
```

1. `identity(value)` and `first(items)` — generic functions. `first` returns
   `T | undefined` (the array may be empty).
2. `Stack<T>` — a generic class with `push`, `pop`, `peek`, and a `size` getter.
3. `pluck(obj, key)` — constrained `<T, K extends keyof T>`, returns `T[K]`.
4. `merge(a, b)` — combine two objects into `A & B`.

Then compare with [`solutions/`](./solutions).
