// Capstone solution — Task model.

export type TaskStatus =
  | { kind: "todo" }
  | { kind: "in_progress"; startedAt: number }
  | { kind: "done"; completedAt: number };

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export function createTask(id: number, title: string): Task {
  return { id, title, status: { kind: "todo" } };
}

export function startTask(task: Task, startedAt: number): Task {
  return { ...task, status: { kind: "in_progress", startedAt } };
}

export function completeTask(task: Task, completedAt: number): Task {
  return { ...task, status: { kind: "done", completedAt } };
}

export function statusLabel(task: Task): string {
  switch (task.status.kind) {
    case "todo":
      return "To do";
    case "in_progress":
      return "In progress";
    case "done":
      return "Done";
    default: {
      const _exhaustive: never = task.status;
      return _exhaustive;
    }
  }
}
