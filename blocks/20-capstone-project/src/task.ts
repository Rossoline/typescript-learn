// Capstone — Task model with a discriminated status union.

export type TaskStatus =
  | { kind: "todo" }
  | { kind: "in_progress"; startedAt: number }
  | { kind: "done"; completedAt: number };

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

// 2a. Create a task in the "todo" state.
export function createTask(id: number, title: string): Task {
  void id;
  void title; // remove these lines once you use the parameters
  // TODO: return a Task with status { kind: "todo" }
  throw new Error("Not implemented");
}

// 2b. Move a task to "in_progress", recording startedAt. Return a new Task.
export function startTask(task: Task, startedAt: number): Task {
  void task;
  void startedAt; // remove these lines once you use the parameters
  // TODO: return { ...task, status: { kind: "in_progress", startedAt } }
  throw new Error("Not implemented");
}

// 2c. Move a task to "done", recording completedAt. Return a new Task.
export function completeTask(task: Task, completedAt: number): Task {
  void task;
  void completedAt; // remove these lines once you use the parameters
  // TODO: return { ...task, status: { kind: "done", completedAt } }
  throw new Error("Not implemented");
}

// 2d. Human label for the status. Exhaustive switch with a `never` default.
export function statusLabel(task: Task): string {
  void task; // remove this line once you use the parameter
  // TODO: todo -> "To do", in_progress -> "In progress", done -> "Done"
  throw new Error("Not implemented");
}
