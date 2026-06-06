// Block 08 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export type Priority = "low" | "medium" | "high";

export function statusLabel(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return "Awaiting shipment";
    case OrderStatus.Shipped:
      return "In transit";
    case OrderStatus.Delivered:
      return "Delivered";
    case OrderStatus.Cancelled:
      return "Cancelled";
  }
}

export function isFinal(status: OrderStatus): boolean {
  switch (status) {
    case OrderStatus.Delivered:
    case OrderStatus.Cancelled:
      return true;
    case OrderStatus.Pending:
    case OrderStatus.Shipped:
      return false;
    default: {
      // If a new OrderStatus is added and not handled above, `status` is no
      // longer `never` and this line fails to compile.
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

export function priorityWeight(priority: Priority): number {
  switch (priority) {
    case "low":
      return 1;
    case "medium":
      return 2;
    case "high":
      return 3;
  }
}

// Notes:
// - A switch covering every enum member is provably exhaustive, so statusLabel
//   returns a string on all paths without a default.
// - The `never` default in isFinal turns "forgot a case" into a compile error.
// - priorityWeight shows the literal-union alternative: no runtime enum object,
//   just a closed set of string literals.
