// Block 07 — Exercises
// Run tests:  npx vitest blocks/07-classes

// 1. A bank account with an encapsulated balance.
export class BankAccount {
  // Backing field is private; the public `balance` getter reads it.
  private _balance: number;

  constructor(initial: number) {
    this._balance = initial;
  }

  // Add `amount` to the balance. Throw "amount must be positive" if amount <= 0.
  deposit(amount: number): void {
    void amount; // remove this line once you use the parameter
    // TODO: validate, then add to this._balance
    throw new Error("Not implemented");
  }

  // Subtract `amount`. Throw "amount must be positive" if amount <= 0,
  // or "insufficient funds" if amount > balance.
  withdraw(amount: number): void {
    void amount; // remove this line once you use the parameter
    // TODO: validate, then subtract from this._balance
    throw new Error("Not implemented");
  }

  // Expose the balance read-only via a getter.
  get balance(): number {
    void this._balance; // remove this line once you use the field
    // TODO: return this._balance
    throw new Error("Not implemented");
  }
}

// 2. Concrete shapes over this abstract base. Each must implement area().
export abstract class Shape {
  constructor(public readonly kind: string) {}
  abstract area(): number;
}

export class Circle extends Shape {
  constructor(private radius: number) {
    super("circle");
  }
  area(): number {
    void this.radius; // remove once you use it
    // TODO: return π * radius²
    throw new Error("Not implemented");
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
    void this.width;
    void this.height; // remove once you use them
    // TODO: return width * height
    throw new Error("Not implemented");
  }
}

// 3. A class implementing an interface, using parameter properties.
export interface Identified {
  readonly id: number;
}

export class Member implements Identified {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}

// 4. A computed, read-only property via a getter.
export class Temperature {
  constructor(private celsius: number) {}

  get fahrenheit(): number {
    void this.celsius; // remove once you use it
    // TODO: return celsius * 9/5 + 32
    throw new Error("Not implemented");
  }
}
