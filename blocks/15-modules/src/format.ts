// Block 15 — format module
// `Money` is imported as a type only — it's erased from the compiled JS.
import type { Money } from "./types";

export function formatMoney(money: Money): string {
  void money; // remove this line once you use the parameter
  // TODO: return `${amount with 2 decimals} ${currency}`, e.g. "9.50 USD"
  throw new Error("Not implemented");
}
