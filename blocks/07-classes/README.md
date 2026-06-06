# Block 07 — Classes

TypeScript adds types and access control on top of JavaScript classes.

## Fields, constructors, access modifiers

```ts
class BankAccount {
  private balance: number; // only visible inside the class

  constructor(initial: number) {
    this.balance = initial;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}
```

Modifiers: `public` (default), `private` (this class only), `protected` (this class +
subclasses), and `readonly` (assignable only in the constructor).

## Parameter properties (shorthand)

Prefixing a constructor parameter with a modifier declares **and** assigns the field
in one step:

```ts
class User {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}
// equivalent to declaring id/name fields and assigning them in the body
```

## Getters

A getter exposes a computed value as if it were a property:

```ts
class Temperature {
  constructor(private celsius: number) {}
  get fahrenheit(): number {
    return this.celsius * (9 / 5) + 32;
  }
}
new Temperature(100).fahrenheit; // 212
```

## Abstract classes, `extends`, `super`, `implements`

An `abstract` class can't be instantiated and may declare `abstract` methods that
subclasses must implement. Subclasses call `super(...)` to run the base constructor.
`implements` checks a class against an interface contract.

```ts
interface Identified {
  readonly id: number;
}

abstract class Shape {
  constructor(public readonly kind: string) {}
  abstract area(): number; // each subclass provides this
}

class Circle extends Shape {
  constructor(private radius: number) {
    super("circle");
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/07-classes
```

1. `BankAccount` — `private balance`, `deposit`/`withdraw` with validation (no negative
   amounts; no overdraft), and a `get balance()` getter.
2. `Circle` and `Rectangle` — concrete subclasses of the given abstract `Shape`,
   each implementing `area()` and calling `super(...)`.
3. `User` — implements `Identified` using **parameter properties**.
4. `Temperature` — a `get fahrenheit()` getter over a private `celsius` field.

Then compare with [`solutions/`](./solutions).
