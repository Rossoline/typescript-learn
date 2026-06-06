# Блок 15 — Модулі

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Реальні проєкти розбиті на файли. ES-модулі — це те, як ці файли діляться кодом через явні
`import`/`export`, а TypeScript додає згори імпорти *лише типів* (type-only).

## Іменовані проти стандартних експортів

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14159;

// other.ts
import { add, PI } from "./math"; // іменовані імпорти
```

Модуль також може мати один `export default`, який імпортують без фігурних дужок. Іменовані
експорти зазвичай кращі — вони явні й зручні для рефакторингу.

## Імпорти лише типів (`import type`)

Коли імпортуєш щось, що використовується **лише як тип**, скажи про це. Це документує намір
і гарантовано стирається з вихідного JS:

```ts
import type { Money } from "./types";

export function formatMoney(money: Money): string {
  return `${money.amount.toFixed(2)} ${money.currency}`;
}
```

## Ре-експорти та barrel-файли

*Barrel* — це `index.ts`, який ре-експортує публічний API теки з одного місця, щоб
споживачі імпортували з кореня пакета, а не з глибоких шляхів:

```ts
// index.ts
export { add, multiply } from "./math";
export { formatMoney } from "./format";
export type { Money } from "./types"; // ре-експорт типу
```

```ts
import { add, formatMoney, type Money } from "./index";
```

## Розв'язання модулів (коротко)

Це репо використовує `"moduleResolution": "Bundler"`, тож відносні імпорти на кшталт
`"./math"` розв'язуються у `math.ts` без розширення файлу. Імпорти завжди відносні (`./`,
`../`) або імена пакетів.

---

## Вправи

Цей блок — невеликий багатофайловий застосунок під [`src/`](./src). Реалізуй кожен
`// TODO`, потім запусти:

```bash
npx vitest blocks/15-modules
```

1. `src/math.ts` — реалізуй `add` і `multiply`.
2. `src/format.ts` — реалізуй `formatMoney`, використовуючи вже підключений
   **`import type { Money }`**.
3. `src/index.ts` — напиши **barrel**: ре-експортуй `add`, `multiply`, `formatMoney` і тип
   `Money`.

Потім порівняй з [`solutions/`](./solutions).
