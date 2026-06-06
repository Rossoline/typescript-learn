// Block 05 — Union & Literal Types: worked examples
// Run me:  npx tsx blocks/05-union-and-literal-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// 1. Union: a value that is either a string or a number.
function formatId(id: string | number): string {
  return typeof id === "number" ? id.toString() : id;
}
console.log(formatId(42), formatId("abc")); // "42" "abc"

// 2. Literal union models a finite set of valid states.
type Light = "red" | "yellow" | "green";
let light: Light = "red";
console.log("light:", light);
// light = "blue"; // ❌ Type '"blue"' is not assignable to type 'Light'

// 3. Combining literals to route behavior.
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
function verb(method: HttpMethod): string {
  switch (method) {
    case "GET":
      return "reading";
    case "POST":
      return "creating";
    case "PUT":
      return "updating";
    case "DELETE":
      return "removing";
  }
}
console.log(verb("POST")); // creating

// 4. as const derives a union from a runtime array — one source of truth.
const ROLES = ["admin", "user", "guest"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "user" | "guest"
const role: Role = "admin";
console.log("role:", role, "all roles:", ROLES);
