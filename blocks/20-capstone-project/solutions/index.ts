// Capstone solution — barrel: the library's public API.
export { ok, err } from "./result";
export type { Result } from "./result";
export { createTask, startTask, completeTask, statusLabel } from "./task";
export type { Task, TaskStatus } from "./task";
export { Store } from "./store";
