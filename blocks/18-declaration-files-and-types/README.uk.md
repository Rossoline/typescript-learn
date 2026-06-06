# Блок 18 — Файли оголошень і @types

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Файл `.d.ts` містить **лише типи** — жодного коду часу виконання. Це те, як TypeScript
дізнається форму JavaScript, у який не може зазирнути: скомпільовані бібліотеки,
нетипізовані npm-пакети або звичайний файл `.js` у твоєму проєкті.

> **Як перевіряється цей блок:** оголошення — це типи, тож твоїм тестом є **перевірка
> типів**. Запусти `npm run typecheck`. Код бібліотеки в `legacy.js` працює в будь-якому
> разі — ти додаєш саме *типи*, на які покладається решта твого коду.

## Пакети `@types/*`

Багато бібліотек постачають власні типи. Ті, що ні, часто мають спільнотні типи в npm:

```bash
npm i lodash
npm i -D @types/lodash   # типи живуть в окремому пакеті
```

TypeScript знаходить їх автоматично під `node_modules/@types`.

## Типізація локального JS-модуля сусіднім `.d.ts`

Маючи нетипізований `legacy.js`:

```js
export function shout(message) {
  return message.toUpperCase() + "!";
}
export const LANG = "js";
```

…напиши поруч `legacy.d.ts`. Імпортери підхоплять ці типи автоматично:

```ts
// legacy.d.ts
export function shout(message: string): string;
export const LANG: string;
```

`.d.ts` використовує **оголошення** (без тіл): `export function f(x: T): R;`,
`export const c: T;`, `export interface I { ... }`.

## Амбієнтні оголошення та доповнення глобалів (для подальшого читання)

- `declare module "some-lib" { ... }` типізує цілий нетипізований пакет за іменем.
- `declare global { interface Window { myFlag: boolean } }` доповнює глобал. Використовуй
  обережно — глобали спільні для кожного файлу в програмі.

---

## Вправи

Нетипізований модуль лежить у [`src/legacy.js`](./src/legacy.js). Напиши його типи у
[`src/legacy.d.ts`](./src/legacy.d.ts), потім перевір:

```bash
npm run typecheck
```

1. Оголоси `shout(message: string): string` у `legacy.d.ts`.
2. Оголоси `LANG` як `string`.
3. Переконайся, що типізовані імпорти в `tests/exercises.test.ts` компілюються й
   запускаються.

Потім порівняй з [`solutions/`](./solutions).
