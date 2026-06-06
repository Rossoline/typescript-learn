import { describe, it, expect, expectTypeOf } from "vitest";
import { ok, err, type Result } from "../src/result";
import {
  createTask,
  startTask,
  completeTask,
  statusLabel,
  type Task,
} from "../src/task";
import { Store } from "../src/store";
import * as lib from "../src/index";

const barrel = lib as Record<string, unknown>;

describe("Block 20 — Capstone", () => {
  it("result constructors", () => {
    expect(ok(5)).toEqual({ ok: true, value: 5 });
    expect(err("bad")).toEqual({ ok: false, error: "bad" });
  });

  it("task lifecycle and labels", () => {
    const t = createTask(1, "Learn TS");
    expect(t).toEqual({ id: 1, title: "Learn TS", status: { kind: "todo" } });
    expect(statusLabel(t)).toBe("To do");

    const started = startTask(t, 100);
    expect(started.status).toEqual({ kind: "in_progress", startedAt: 100 });
    expect(statusLabel(started)).toBe("In progress");

    const done = completeTask(started, 200);
    expect(done.status).toEqual({ kind: "done", completedAt: 200 });
    expect(statusLabel(done)).toBe("Done");
    // immutability: the original task is unchanged
    expect(t.status).toEqual({ kind: "todo" });
  });

  it("store add/get/update/remove return Results", () => {
    const store = new Store<Task>();
    const a = createTask(1, "A");

    expect(store.add(a).ok).toBe(true);
    expect(store.add(a)).toEqual({ ok: false, error: "id 1 already exists" });

    expect(store.get(1)).toEqual({ ok: true, value: a });
    expect(store.get(99)).toEqual({ ok: false, error: "id 99 not found" });

    const updated = store.update(1, { title: "A2" });
    expect(updated.ok && updated.value.title).toBe("A2");
    expect(store.update(99, { title: "x" })).toEqual({
      ok: false,
      error: "id 99 not found",
    });

    expect(store.list()).toHaveLength(1);
    expect(store.remove(1)).toEqual({ ok: true, value: true });
    expect(store.remove(1)).toEqual({ ok: false, error: "id 1 not found" });
    expect(store.list()).toEqual([]);
  });

  it("barrel re-exports the public API", () => {
    for (const name of [
      "ok",
      "err",
      "createTask",
      "startTask",
      "completeTask",
      "statusLabel",
      "Store",
    ]) {
      expect(barrel[name], `index should re-export ${name}`).toBeTypeOf("function");
    }
  });

  it("has the right types", () => {
    expectTypeOf(createTask).returns.toEqualTypeOf<Task>();
    expectTypeOf(ok<number>).returns.toEqualTypeOf<Result<number, never>>();
    expectTypeOf(new Store<Task>().get).returns.toEqualTypeOf<Result<Task, string>>();
  });
});
