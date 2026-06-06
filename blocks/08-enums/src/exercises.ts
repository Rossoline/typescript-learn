// Block 08 — Exercises
// Run tests:  npx vitest blocks/08-enums

export enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export type Priority = "low" | "medium" | "high";

// 1. Map each status to a human-readable label:
//    Pending -> "Awaiting shipment", Shipped -> "In transit",
//    Delivered -> "Delivered", Cancelled -> "Cancelled".
export function statusLabel(status: OrderStatus): string {
  void status; // remove this line once you use the parameter
  // TODO: switch over OrderStatus and return the label
  throw new Error("Not implemented");
}

// 2. Return whether the status is terminal (Delivered or Cancelled).
//    Use an exhaustive switch with a `never` default so adding a new status
//    that you forget to handle becomes a compile error.
export function isFinal(status: OrderStatus): boolean {
  void status; // remove this line once you use the parameter
  // TODO: exhaustive switch returning true only for Delivered/Cancelled
  throw new Error("Not implemented");
}

// 3. Same idea, but modeled as a literal union instead of an enum.
//    low -> 1, medium -> 2, high -> 3.
export function priorityWeight(priority: Priority): number {
  void priority; // remove this line once you use the parameter
  // TODO: map each priority literal to its weight
  throw new Error("Not implemented");
}
