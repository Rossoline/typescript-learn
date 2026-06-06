// Block 07 — Classes: worked examples
// Run me:  npx tsx blocks/07-classes/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// Access modifiers + a getter.
class Counter {
  private count: number;
  constructor(start: number) {
    this.count = start;
  }
  increment(): void {
    this.count += 1;
  }
  get value(): number {
    return this.count;
  }
}
const counter = new Counter(0);
counter.increment();
counter.increment();
console.log("counter.value:", counter.value); // 2

// Parameter properties shorthand.
class User {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}
const u = new User(1, "Ada");
console.log("user:", u.id, u.name);

// Abstract base + subclasses + super.
abstract class Shape {
  constructor(public readonly kind: string) {}
  abstract area(): number;
  describe(): string {
    return `${this.kind} with area ${this.area().toFixed(2)}`;
  }
}
class Rectangle extends Shape {
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
console.log(new Rectangle(3, 4).describe()); // rectangle with area 12.00
