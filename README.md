# TypeScript in a Month 🚀

> Learn **core TypeScript** in ~4 weeks the way you actually get good at it: by writing
> code. 20 hands-on, **test-driven** blocks under strict mode, each with runnable
> examples and **verified reference solutions**.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tested with Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Node 18+](https://img.shields.io/badge/Node-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github&logoColor=white)](https://github.com/Rossoline/typescript-learn/generate)

A complete, free course for **JavaScript developers learning TypeScript**. You don't
read about types — you implement functions, make failing tests pass, and satisfy the
compiler under `strict`. Perfect for self-study, a study group, or a workshop syllabus.

<!-- TODO (recommended for promotion): record a ~10s GIF of a red test turning green
     after implementing an exercise, save it as docs/demo.gif, and uncomment:
![Red test → implement → green](docs/demo.gif)
-->

## Why this course

- 🧪 **Test-driven** — every block ships failing tests; you make them green. No passive reading.
- 🔒 **Strict from day one** — `strict`, `noUncheckedIndexedAccess`, `noUnusedParameters`, and more, so you learn the habits real codebases expect.
- ✅ **Verified solutions** — every reference answer is itself tested (`npm run test:solutions`), so what you compare against is guaranteed correct.
- 🧠 **Type-level tests** — exercises about types are checked with `expectTypeOf`, not just runtime asserts.
- 📦 **Real-world finish** — modules, async, the `Result<T, E>` pattern, declaration files, and a multi-module **capstone** library.

## Use this template

This is a GitHub **template repository** — click **[Use this template](https://github.com/Rossoline/typescript-learn/generate)**
to get your own copy you can commit solutions to and track progress with git. (Or just
fork it.)

---

## Quick start

```bash
# 1. Create your copy (Use this template) or clone
git clone https://github.com/Rossoline/typescript-learn.git
cd typescript-learn

# 2. Install dependencies (Node.js 18+)
npm install

# 3. Run all tests — most fail until you solve the exercises
npm test

# 4. Work one block at a time, re-running on save
npx vitest blocks/01-getting-started
```

### Recommended workflow per block

1. Read the block's `README.md`.
2. Open `src/examples.ts`, read it, and run it to see the output:
   ```bash
   npx tsx blocks/01-getting-started/src/examples.ts
   ```
3. Open `src/exercises.ts` and implement each `// TODO`.
4. Run that block's tests until they all pass:
   ```bash
   npx vitest blocks/01-getting-started
   ```
5. Check your types are clean, then compare with `solutions/`:
   ```bash
   npm run typecheck
   ```

> **Type-only blocks (14 & 18):** there the exercise is to *write types* (mapped/
> conditional types, a `.d.ts`), so the **type checker is the test** — run
> `npm run typecheck` and make the errors in that block disappear.

---

## What's in each block

```
blocks/NN-topic/
├── README.md          # the topic explained, with examples and the exercise list
├── src/examples.ts    # runnable, worked examples
├── src/exercises.ts   # practice tasks with // TODO stubs — your job
├── tests/             # automated tests (Vitest) — make them pass
└── solutions/         # reference solutions (try the exercises first!)
```

## Curriculum at a glance

The full day-by-day plan is in **[PLAN.md](./PLAN.md)**. Twenty blocks across four weeks:

| Week | Theme | Blocks |
|------|-------|--------|
| 1 | Foundations | 01 Getting Started · 02 Basic Types · 03 Functions · 04 Objects & Type Aliases · 05 Union & Literal Types |
| 2 | Shaping Types | 06 Interfaces · 07 Classes · 08 Enums · 09 Narrowing · 10 Type Assertions |
| 3 | Advanced Core | 11 Generics · 12 Utility Types · 13 keyof / typeof / Indexed Access · 14 Mapped & Conditional Types · 15 Modules |
| 4 | Practical TS | 16 Async & Promises · 17 Error Handling & Result Types · 18 Declaration Files & @types · 19 tsconfig & strict mode · 20 Capstone Project |

## Scripts

| Command | What it does |
|---------|--------------|
| `npm test` | Run every block's tests (your progress). |
| `npm run typecheck` | Type-check the whole project (`tsc --noEmit`). |
| `npm run test:solutions` | Verify the reference solutions all pass. |
| `npx vitest blocks/NN-...` | Run/watch a single block. |
| `npx tsx <file>` | Run any `.ts` file directly. |

---

## Editor setup

Works out of the box in **VS Code** (install the *Vitest* extension for inline test
running) and **WebStorm / IntelliJ** (right-click a `*.test.ts` → *Run 'Vitest'*; enable
*Toggle auto-test* to re-run on save). TypeScript errors show inline as you type in both.

## How testing works

Each exercise file exports functions or values; the matching test imports them and
asserts behavior. Implement a `// TODO` correctly and its test goes green. The goal
isn't only passing tests — it's writing code the **compiler** accepts under `strict`.

## Self-study tips

- **Use this template** (or fork) so you can commit your solutions and build a streak.
- Commit after each block (`git commit -m "block 03 done"`).
- Don't skip the READMEs — the exercises assume you read them.
- Stuck for ~15 min? Read the solution, understand it, then re-implement from memory.

---

If this helped you learn TypeScript, please ⭐ the repo — it helps others find it.
Contributions and issue reports are welcome. **Happy typing!** 🧠
