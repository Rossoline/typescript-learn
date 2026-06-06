// Block 07 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export class BankAccount {
  private _balance: number;

  constructor(initial: number) {
    this._balance = initial;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("amount must be positive");
    this._balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("amount must be positive");
    if (amount > this._balance) throw new Error("insufficient funds");
    this._balance -= amount;
  }

  get balance(): number {
    return this._balance;
  }
}

export abstract class Shape {
  constructor(public readonly kind: string) {}
  abstract area(): number;
}

export class Circle extends Shape {
  constructor(private radius: number) {
    super("circle");
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super("rectangle");
  }
  area(): number {
    return this.width * this.height;
  }
}

export interface Identified {
  readonly id: number;
}

export class Member implements Identified {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}

export class Temperature {
  constructor(private celsius: number) {}

  get fahrenheit(): number {
    return this.celsius * (9 / 5) + 32;
  }
}

// Notes:
// - The private `_balance` field is the single source of truth; the `balance` getter
//   exposes it read-only (no setter), so callers can't mutate it directly.
// - `Shape` is abstract: it can't be `new`-ed, and each subclass MUST implement area()
//   and call `super(kind)` so the base constructor runs.
// - Parameter properties (`public readonly id`) declare and assign fields in one line.
// - A getter with no matching setter is effectively a computed read-only property.
