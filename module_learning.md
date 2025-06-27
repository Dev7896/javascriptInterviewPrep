# ModuleLearning.md

## ES Modules (ESM) vs CommonJS (CJS) — Interview Preparation Guide

---

### 🔹 What is CommonJS (CJS)?

CommonJS is the original module system used in Node.js.

#### 📌 Syntax:

```js
// Export
module.exports = {
  add: (a, b) => a + b,
};

// Import
const { add } = require('./math');
```

#### 🔑 Key Points:

- Uses `require()` for importing modules
- Uses `module.exports` to export
- Synchronous loading
- Modules are cached after the first import
- Widely used in Node.js ecosystem

---

### 🔹 What is ES Module (ESM)?

ESM is the modern standard module system used in browsers and supported in modern versions of Node.js.

#### 📌 Syntax:

```js
// Export
export function add(a, b) {
  return a + b;
}

// Import
import { add } from './math.js';
```

#### 🔑 Key Points:

- Uses `import` and `export` syntax
- Asynchronous and supports top-level `await`
- Must use file extension `.js` or `.mjs` or set `"type": "module"` in `package.json`
- Better support for tree-shaking and optimization

---

### 🔹 Differences Between ESM and CJS

| Feature           | CommonJS (CJS)              | ES Modules (ESM)                    |
| ----------------- | --------------------------- | ----------------------------------- |
| Syntax            | `require`, `module.exports` | `import`, `export`                  |
| Loading           | Synchronous                 | Asynchronous                        |
| Execution order   | Dynamic                     | Static                              |
| Tree-shaking      | ❌ Not supported             | ✅ Supported                         |
| File extension    | `.js`                       | `.mjs` or `.js` with `type: module` |
| Top-level `await` | ❌ No                        | ✅ Yes                               |

---

### 🔹 Static (ESM) vs Dynamic (CJS) — Explained Simply

#### ✅ ESM is Static:

- All imports/exports are known **before** the code runs.
- **Imports must be at the top-level** — not inside functions or conditionals.

```js
// ✅ Valid ESM
import { add } from './math.js';

// ❌ Invalid in ESM
if (true) {
  import { add } from './math.js';
}
```

**Because imports are known in advance, bundlers and compilers can optimize code (tree-shaking, dead code removal).**

#### ✅ CJS is Dynamic:

- You can use `require()` anywhere, including inside functions or conditionals.

```js
if (userWantsMath) {
  const math = require('./math');
  console.log(math.add(2, 3));
}
```

**Because loading is dynamic, optimization is harder.**

---

### 🔹 Mixing ESM & CJS

| Scenario          | Support                                 |
| ----------------- | --------------------------------------- |
| ESM importing CJS | ✅ Possible                              |
| CJS importing ESM | ❌ Not directly (use dynamic `import()`) |

```js
// In CJS file
(async () => {
  const { add } = await import('./math.js');
})();
```

---

### 🔹 How to Enable ESM in Node.js

- Option 1: Use `.mjs` extension
- Option 2: Use `.js` files and set in `package.json`:

```json
{
  "type": "module"
}
```

---

### ❓ Common Interview Questions

1. Why are ES Modules preferred over CommonJS?
2. Can you use `require()` in an ES Module?
3. What happens if you import a CJS module into an ESM file?
4. What does it mean that ESM is statically analyzable?
5. How can CJS import an ESM file?

---

### ✅ Summary Line:

**ES Modules are static because imports/exports must be at the top and are known before execution; CommonJS is dynamic because ****\`\`**** can happen anywhere during runtime.**

