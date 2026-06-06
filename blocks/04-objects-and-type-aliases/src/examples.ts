// Block 04 — Objects & Type Aliases: worked examples
// Run me:  npx tsx blocks/04-objects-and-type-aliases/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// 1. type alias for an object shape, with optional + readonly properties.
type Point = {
  readonly x: number;
  readonly y: number;
  label?: string; // optional: type is string | undefined
};

const p: Point = { x: 1, y: 2 };
console.log("point:", p, "label?", p.label); // label is undefined
// p.x = 9; // ❌ Cannot assign to 'x' because it is a read-only property

// 2. type aliases name any type, not just objects.
type ID = string | number;
type User = { id: ID; name: string };
const user: User = { id: 42, name: "Ada" };
console.log("user:", user);

// 3. Intersection merges shapes — the result must satisfy both.
type WithTimestamps = { createdAt: number; updatedAt: number };
type Post = { title: string } & WithTimestamps;
const post: Post = { title: "Hi", createdAt: 1, updatedAt: 2 };
console.log("post:", post);

// 4. Index signature: keys aren't known ahead of time.
type Counts = { [word: string]: number };
const counts: Counts = {};
counts["hello"] = (counts["hello"] ?? 0) + 1; // value is number | undefined when read
console.log("counts:", counts);

// 5. Spreading objects to merge — override wins on conflicting keys.
const base = { host: "localhost", port: 80 };
const merged = { ...base, port: 443 };
console.log("merged:", merged); // { host: 'localhost', port: 443 }
