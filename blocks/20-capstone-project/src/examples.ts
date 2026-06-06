// Block 20 — Capstone: a quick tour of the finished library's shape.
// Run me (after solving):  npx tsx blocks/20-capstone-project/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// This mirrors how the library is meant to be used once implemented. It uses inline
// definitions so it runs even before you finish src/ — your real code lives in the
// task/store/result modules and is wired together by the index.ts barrel.

type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };

type Task = {
  id: number;
  title: string;
  status: { kind: "todo" } | { kind: "done"; completedAt: number };
};

function complete(task: Task, at: number): Task {
  return { ...task, status: { kind: "done", completedAt: at } };
}

const task: Task = { id: 1, title: "Learn TS", status: { kind: "todo" } };
const done = complete(task, 1000);
console.log("done task:", done);

const lookup: Result<Task, string> =
  done.id === 1 ? { ok: true, value: done } : { ok: false, error: "not found" };
console.log("lookup ok?", lookup.ok);
