// Block 15 — solution: format module.
import type { Money } from "./types";

export function formatMoney(money: Money): string {
  return `${money.amount.toFixed(2)} ${money.currency}`;
}
