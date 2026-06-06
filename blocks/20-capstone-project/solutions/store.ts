// Capstone solution — generic in-memory store; every method returns a Result.
import type { Result } from "./result";
import { ok, err } from "./result";

export class Store<T extends { id: number }> {
  private items = new Map<number, T>();

  add(item: T): Result<T, string> {
    if (this.items.has(item.id)) return err(`id ${item.id} already exists`);
    this.items.set(item.id, item);
    return ok(item);
  }

  get(id: number): Result<T, string> {
    const item = this.items.get(id);
    if (item === undefined) return err(`id ${id} not found`);
    return ok(item);
  }

  update(id: number, patch: Partial<Omit<T, "id">>): Result<T, string> {
    const existing = this.items.get(id);
    if (existing === undefined) return err(`id ${id} not found`);
    // Keep the original id; patch can't change it (Omit<T, "id">).
    const updated = { ...existing, ...patch, id } as T;
    this.items.set(id, updated);
    return ok(updated);
  }

  remove(id: number): Result<true, string> {
    if (!this.items.has(id)) return err(`id ${id} not found`);
    this.items.delete(id);
    return ok(true);
  }

  list(): T[] {
    return Array.from(this.items.values());
  }
}
