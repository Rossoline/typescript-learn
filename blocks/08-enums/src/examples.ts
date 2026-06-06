// Block 08 — Enums: worked examples
// Run me:  npx tsx blocks/08-enums/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// String enum — values are readable at runtime.
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}
console.log("status value:", OrderStatus.Shipped); // "shipped"

// Numeric enum — gets a reverse mapping (number -> name).
enum Direction {
  Up, // 0
  Down, // 1
}
console.log("Direction.Up:", Direction.Up); // 0
console.log("Direction[0]:", Direction[0]); // "Up"

// Exhaustiveness check with never.
function isFinal(status: OrderStatus): boolean {
  switch (status) {
    case OrderStatus.Delivered:
      return true;
    case OrderStatus.Pending:
    case OrderStatus.Shipped:
      return false;
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}
console.log("isFinal(Delivered):", isFinal(OrderStatus.Delivered)); // true

// The same closed set as a literal union — no runtime object needed.
type Priority = "low" | "medium" | "high";
const p: Priority = "high";
console.log("priority:", p);
