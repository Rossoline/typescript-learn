// Capstone — generic in-memory store. No method throws; all return a Result.
import type { Result } from "./result";

export class Store<T extends { id: number }> {
  private items = new Map<number, T>();

  // 3a. Add an item. Error "id <id> already exists" if the id is taken.
  add(item: T): Result<T, string> {
    void item; // remove this line once you use the parameter
    // TODO
    throw new Error("Not implemented");
  }

  // 3b. Get by id. Error "id <id> not found" if absent.
  get(id: number): Result<T, string> {
    void id; // remove this line once you use the parameter
    // TODO
    throw new Error("Not implemented");
  }

  // 3c. Merge a patch onto an existing item (id can't change). Error if absent.
  update(id: number, patch: Partial<Omit<T, "id">>): Result<T, string> {
    void id;
    void patch; // remove these lines once you use the parameters
    // TODO
    throw new Error("Not implemented");
  }

  // 3d. Remove by id. Return ok(true), or error if absent.
  remove(id: number): Result<true, string> {
    void id; // remove this line once you use the parameter
    // TODO
    throw new Error("Not implemented");
  }

  // 3e. List every stored item.
  list(): T[] {
    void this.items; // remove this line once you use the field
    // TODO
    throw new Error("Not implemented");
  }
}
