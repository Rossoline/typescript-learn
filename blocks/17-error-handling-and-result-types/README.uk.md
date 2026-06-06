# Блок 17 — Обробка помилок і типи Result

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Два взаємодоповнювані способи мати справу зі збоями: ідіоматичний `try/catch` і
типізований патерн `Result`, що робить збій частиною типу повернення.

## Спіймані помилки мають тип `unknown`

За `strict` змінна в `catch` має тип `unknown` — у JS можна кинути будь-що, тож TypeScript
не припускає, що це `Error`. Звузь перед використанням:

```ts
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown error";
}
```

## Власні класи помилок

Успадкуйся від `Error`, щоб нести додатковий контекст і вмикати перевірки `instanceof`:

```ts
class ValidationError extends Error {
  constructor(public field: string) {
    super(`Invalid field: ${field}`);
    this.name = "ValidationError";
  }
}
```

## Патерн `Result<T, E>`

Замість кидати виняток, поверни значення, яке *кодує* успіх або збій. Той, хто викликає,
мусить перевірити `ok` перед доступом до даних — компілятор це примушує:

```ts
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return { ok: false, error: "division by zero" };
  return { ok: true, value: a / b };
}

const r = divide(10, 2);
if (r.ok) {
  console.log(r.value); // звужено до гілки успіху
} else {
  console.log(r.error);
}
```

`Result` — це об'єднання з дискримінантом (блок 09): збої видимі в типі й ніколи не
губляться у неспійманому винятку.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/17-error-handling-and-result-types
```

1. `tryParse(json)` — повернути `Result<unknown>`: `JSON.parse` при успіху, результат із
   `Error` при збої (ніколи не кидає виняток).
2. `divide(a, b)` — повернути `Result<number, string>`, з помилкою при діленні на нуль.
3. `getErrorMessage(error)` — звузити спійману помилку `unknown` до рядкового повідомлення.

Потім порівняй з [`solutions/`](./solutions).
