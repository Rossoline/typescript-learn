# Блок 19 — tsconfig і строгий режим

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

`tsconfig.json` керує тим, наскільки строгий компілятор. Це репо навмисно працює зі
строгими налаштуваннями — тут ти дізнаєшся, що дає кожне з них, пишучи код, який їх
задовольняє.

## Ключові опції компілятора

```jsonc
{
  "compilerOptions": {
    "strict": true,                    // парасолькова опція (див. нижче)
    "noUncheckedIndexedAccess": true,  // arr[i] — це T | undefined
    "noImplicitAny": true,             // кожне значення мусить мати відомий тип
    "target": "ES2022",               // версія JS для перевірки/виводу
    "module": "ESNext"                // система модулів
  }
}
```

`strict: true` вмикає сімейство перевірок, найважливіші з яких:

- **`strictNullChecks`** — `null`/`undefined` не є мовчазною частиною кожного типу; ти
  мусиш їх обробляти. Це найбільший ловець багів.
- **`noImplicitAny`** — параметр/змінну, тип якої компілятор не може вивести, треба
  анотувати.
- **`strictFunctionTypes`**, **`strictBindCallApply`** та інші.

## `noUncheckedIndexedAccess`

Індексація масиву чи запису дає `T | undefined`, бо індекс може бути поза межами. Ти
змушений обробити випадок відсутності:

```ts
function at<T>(arr: T[], index: number): T | undefined {
  return arr[index]; // тут тип — T | undefined
}
```

## Псевдоніми шляхів (`paths`)

`paths` дає змогу імпортувати через короткі псевдоніми замість довгих відносних ланцюжків:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@utils/*": ["src/utils/*"] }
  }
}
// import { x } from "@utils/math";  // замість ../../../src/utils/math
```

Твоєму збирачу/тест-раннеру потрібен той самий псевдонім, щоб розв'язати його під час
виконання.

---

## Вправи

Вправи лежать у [`src/exercises.ts`](./src/exercises.ts). Кожна має компілюватися **і**
поводитися правильно за строгих прапорців цього репо — реалізуй їх, пояснюючи відповідний
прапорець у коментарі, потім запусти:

```bash
npx vitest blocks/19-tsconfig-and-strict-mode
npm run typecheck
```

1. `at(arr, index)` — повернути `T | undefined` (форма `noUncheckedIndexedAccess`).
2. `greetMaybe(name)` — `name` має тип `string | null`; оброби випадок null
   (`strictNullChecks`).
3. `firstEven(nums)` — повернути перше парне число або `undefined`, якщо такого немає.

Потім порівняй з [`solutions/`](./solutions).
