// JavaScript Feature Benchmark
// Tests various JavaScript features and sorts by execution time

const ITERATIONS = 1000000;
const SMALL_ITERATIONS = 10000;
const TINY_ITERATIONS = 1000;

// Benchmark result storage
const results = [];

// Helper function to run benchmarks
function benchmark(name, fn, iterations = ITERATIONS) {
  // Warmup
  for (let i = 0; i < 100; i++) fn();
  
  // Actual benchmark
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = performance.now();
  const duration = end - start;
  
  results.push({
    name,
    duration: duration.toFixed(4),
    iterations,
    avgPerOp: (duration / iterations * 1000000).toFixed(4) // nanoseconds
  });
  
  console.log(`✓ ${name}: ${duration.toFixed(4)}ms`);
}

console.log('Starting JavaScript Feature Benchmarks...\n');

// ==================== VARIABLES & PRIMITIVES ====================
console.log('=== Variables & Primitives ===');

benchmark('Variable Declaration (let)', () => {
  let x;
});

benchmark('Variable Declaration (const)', () => {
  const x = 1;
});

benchmark('Variable Declaration (var)', () => {
  var x;
});

benchmark('Variable Assignment', () => {
  let x = 42;
});

benchmark('Number Creation', () => {
  const n = 123456;
});

benchmark('String Creation (literal)', () => {
  const s = "hello world";
});

benchmark('String Creation (constructor)', () => {
  const s = String("hello");
});

benchmark('Boolean Creation', () => {
  const b = true;
});

benchmark('Undefined Assignment', () => {
  const u = undefined;
});

benchmark('Null Assignment', () => {
  const n = null;
});

// ==================== ARITHMETIC OPERATIONS ====================
console.log('\n=== Arithmetic Operations ===');

benchmark('Addition', () => {
  const result = 5 + 10;
});

benchmark('Subtraction', () => {
  const result = 100 - 50;
});

benchmark('Multiplication', () => {
  const result = 7 * 8;
});

benchmark('Division', () => {
  const result = 100 / 5;
});

benchmark('Modulo', () => {
  const result = 17 % 5;
});

benchmark('Exponentiation', () => {
  const result = 2 ** 10;
});

benchmark('Increment (++)', () => {
  let x = 0;
  x++;
});

benchmark('Decrement (--)', () => {
  let x = 100;
  x--;
});

// ==================== COMPARISON OPERATORS ====================
console.log('\n=== Comparison Operators ===');

benchmark('Equality (==)', () => {
  const result = 5 == "5";
});

benchmark('Strict Equality (===)', () => {
  const result = 5 === 5;
});

benchmark('Inequality (!=)', () => {
  const result = 5 != 10;
});

benchmark('Strict Inequality (!==)', () => {
  const result = 5 !== "5";
});

benchmark('Greater Than (>)', () => {
  const result = 10 > 5;
});

benchmark('Less Than (<)', () => {
  const result = 5 < 10;
});

benchmark('Greater or Equal (>=)', () => {
  const result = 10 >= 10;
});

benchmark('Less or Equal (<=)', () => {
  const result = 5 <= 10;
});

// ==================== LOGICAL OPERATORS ====================
console.log('\n=== Logical Operators ===');

benchmark('Logical AND (&&)', () => {
  const result = true && false;
});

benchmark('Logical OR (||)', () => {
  const result = true || false;
});

benchmark('Logical NOT (!)', () => {
  const result = !true;
});

benchmark('Nullish Coalescing (??)', () => {
  const result = null ?? "default";
});

benchmark('Optional Chaining (?.)', () => {
  const obj = { a: { b: 1 } };
  const result = obj?.a?.b;
});

// ==================== BITWISE OPERATORS ====================
console.log('\n=== Bitwise Operators ===');

benchmark('Bitwise AND (&)', () => {
  const result = 5 & 3;
});

benchmark('Bitwise OR (|)', () => {
  const result = 5 | 3;
});

benchmark('Bitwise XOR (^)', () => {
  const result = 5 ^ 3;
});

benchmark('Bitwise NOT (~)', () => {
  const result = ~5;
});

benchmark('Left Shift (<<)', () => {
  const result = 5 << 2;
});

benchmark('Right Shift (>>)', () => {
  const result = 5 >> 2;
});

benchmark('Unsigned Right Shift (>>>)', () => {
  const result = -5 >>> 2;
});

// ==================== STRING OPERATIONS ====================
console.log('\n=== String Operations ===');

benchmark('String Concatenation (+)', () => {
  const result = "Hello" + " " + "World";
});

benchmark('Template Literal', () => {
  const name = "World";
  const result = `Hello ${name}`;
});

benchmark('String.length', () => {
  const len = "Hello World".length;
});

benchmark('String.charAt()', () => {
  const char = "Hello".charAt(2);
});

benchmark('String.charCodeAt()', () => {
  const code = "Hello".charCodeAt(0);
});

benchmark('String.indexOf()', () => {
  const idx = "Hello World".indexOf("o");
});

benchmark('String.slice()', () => {
  const sub = "Hello World".slice(0, 5);
});

benchmark('String.substring()', () => {
  const sub = "Hello World".substring(0, 5);
});

benchmark('String.substr()', () => {
  const sub = "Hello World".substr(0, 5);
});

benchmark('String.toLowerCase()', () => {
  const lower = "HELLO".toLowerCase();
});

benchmark('String.toUpperCase()', () => {
  const upper = "hello".toUpperCase();
});

benchmark('String.trim()', () => {
  const trimmed = "  hello  ".trim();
});

benchmark('String.split()', () => {
  const parts = "a,b,c,d".split(",");
});

benchmark('String.replace()', () => {
  const replaced = "Hello World".replace("World", "JS");
});

benchmark('String.match()', () => {
  const match = "Hello World".match(/o/g);
});

benchmark('String.search()', () => {
  const pos = "Hello World".search(/World/);
});

benchmark('String.includes()', () => {
  const has = "Hello World".includes("World");
});

benchmark('String.startsWith()', () => {
  const starts = "Hello".startsWith("He");
});

benchmark('String.endsWith()', () => {
  const ends = "Hello".endsWith("lo");
});

benchmark('String.repeat()', () => {
  const repeated = "x".repeat(10);
});

benchmark('String.padStart()', () => {
  const padded = "5".padStart(3, "0");
});

benchmark('String.padEnd()', () => {
  const padded = "5".padEnd(3, "0");
});

// ==================== ARRAY OPERATIONS ====================
console.log('\n=== Array Operations ===');

benchmark('Array Creation (literal)', () => {
  const arr = [1, 2, 3, 4, 5];
});

benchmark('Array Creation (constructor)', () => {
  const arr = new Array(5);
});

benchmark('Array.push()', () => {
  const arr = [];
  arr.push(1);
});

benchmark('Array.pop()', () => {
  const arr = [1, 2, 3];
  arr.pop();
});

benchmark('Array.shift()', () => {
  const arr = [1, 2, 3];
  arr.shift();
});

benchmark('Array.unshift()', () => {
  const arr = [2, 3];
  arr.unshift(1);
});

benchmark('Array.splice()', () => {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1);
});

benchmark('Array.slice()', () => {
  const arr = [1, 2, 3, 4, 5];
  const sliced = arr.slice(1, 3);
});

benchmark('Array.concat()', () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = arr1.concat(arr2);
});

benchmark('Array.join()', () => {
  const arr = [1, 2, 3];
  const str = arr.join(",");
});

benchmark('Array.reverse()', () => {
  const arr = [1, 2, 3];
  arr.reverse();
});

benchmark('Array.sort()', () => {
  const arr = [3, 1, 4, 1, 5];
  arr.sort();
});

benchmark('Array.indexOf()', () => {
  const arr = [1, 2, 3, 4, 5];
  const idx = arr.indexOf(3);
});

benchmark('Array.lastIndexOf()', () => {
  const arr = [1, 2, 3, 2, 1];
  const idx = arr.lastIndexOf(2);
});

benchmark('Array.includes()', () => {
  const arr = [1, 2, 3];
  const has = arr.includes(2);
});

benchmark('Array.find()', () => {
  const arr = [1, 2, 3, 4, 5];
  const found = arr.find(x => x > 3);
});

benchmark('Array.findIndex()', () => {
  const arr = [1, 2, 3, 4, 5];
  const idx = arr.findIndex(x => x > 3);
});

benchmark('Array.filter()', () => {
  const arr = [1, 2, 3, 4, 5];
  const filtered = arr.filter(x => x > 2);
});

benchmark('Array.map()', () => {
  const arr = [1, 2, 3, 4, 5];
  const mapped = arr.map(x => x * 2);
});

benchmark('Array.reduce()', () => {
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((a, b) => a + b, 0);
});

benchmark('Array.forEach()', () => {
  const arr = [1, 2, 3, 4, 5];
  arr.forEach(x => x * 2);
});

benchmark('Array.every()', () => {
  const arr = [1, 2, 3, 4, 5];
  const all = arr.every(x => x > 0);
});

benchmark('Array.some()', () => {
  const arr = [1, 2, 3, 4, 5];
  const any = arr.some(x => x > 3);
});

benchmark('Array.flat()', () => {
  const arr = [1, [2, 3], [4, 5]];
  const flattened = arr.flat();
});

benchmark('Array.flatMap()', () => {
  const arr = [1, 2, 3];
  const result = arr.flatMap(x => [x, x * 2]);
});

benchmark('Array.fill()', () => {
  const arr = new Array(5);
  arr.fill(0);
});

benchmark('Spread Operator (Array)', () => {
  const arr = [1, 2, 3];
  const copy = [...arr];
});

benchmark('Array.from()', () => {
  const arr = Array.from([1, 2, 3]);
});

benchmark('Array.of()', () => {
  const arr = Array.of(1, 2, 3);
});

// ==================== OBJECT OPERATIONS ====================
console.log('\n=== Object Operations ===');

benchmark('Object Creation (literal)', () => {
  const obj = { a: 1, b: 2 };
});

benchmark('Object Creation (constructor)', () => {
  const obj = new Object();
});

benchmark('Object Property Access (dot)', () => {
  const obj = { a: 1 };
  const val = obj.a;
});

benchmark('Object Property Access (bracket)', () => {
  const obj = { a: 1 };
  const val = obj["a"];
});

benchmark('Object Property Assignment', () => {
  const obj = {};
  obj.a = 1;
});

benchmark('Object Property Deletion', () => {
  const obj = { a: 1 };
  delete obj.a;
});

benchmark('Object.keys()', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const keys = Object.keys(obj);
});

benchmark('Object.values()', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const vals = Object.values(obj);
});

benchmark('Object.entries()', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const entries = Object.entries(obj);
});

benchmark('Object.assign()', () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const merged = Object.assign({}, obj1, obj2);
});

benchmark('Spread Operator (Object)', () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const merged = { ...obj1, ...obj2 };
});

benchmark('Object.create()', () => {
  const obj = Object.create(null);
});

benchmark('Object.freeze()', () => {
  const obj = { a: 1 };
  Object.freeze(obj);
});

benchmark('Object.seal()', () => {
  const obj = { a: 1 };
  Object.seal(obj);
});

benchmark('Object.hasOwnProperty()', () => {
  const obj = { a: 1 };
  const has = obj.hasOwnProperty("a");
});

benchmark('in operator', () => {
  const obj = { a: 1 };
  const has = "a" in obj;
});

benchmark('Object.getOwnPropertyNames()', () => {
  const obj = { a: 1, b: 2 };
  const names = Object.getOwnPropertyNames(obj);
});

benchmark('Object.defineProperty()', () => {
  const obj = {};
  Object.defineProperty(obj, "a", { value: 1 });
});

// ==================== FUNCTION OPERATIONS ====================
console.log('\n=== Function Operations ===');

benchmark('Function Declaration', () => {
  function fn() {}
});

benchmark('Function Expression', () => {
  const fn = function() {};
});

benchmark('Arrow Function', () => {
  const fn = () => {};
});

benchmark('Function Call (no args)', () => {
  function fn() {}
  fn();
});

benchmark('Function Call (with args)', () => {
  function fn(a, b) { return a + b; }
  fn(1, 2);
});

benchmark('Function.call()', () => {
  function fn() {}
  fn.call(null);
});

benchmark('Function.apply()', () => {
  function fn() {}
  fn.apply(null, []);
});

benchmark('Function.bind()', () => {
  function fn() {}
  const bound = fn.bind(null);
});

benchmark('IIFE (Immediately Invoked)', () => {
  (function() {})();
});

benchmark('Closure Creation', () => {
  function outer() {
    const x = 1;
    return function inner() { return x; };
  }
  outer();
});

benchmark('Generator Function', () => {
  function* gen() { yield 1; }
  const g = gen();
});

benchmark('Async Function Declaration', () => {
  async function fn() {}
});

// ==================== CONTROL FLOW ====================
console.log('\n=== Control Flow ===');

benchmark('if statement', () => {
  if (true) {
    const x = 1;
  }
});

benchmark('if-else statement', () => {
  if (false) {
    const x = 1;
  } else {
    const x = 2;
  }
});

benchmark('Ternary operator', () => {
  const result = true ? 1 : 2;
});

benchmark('switch statement', () => {
  const x = 1;
  switch(x) {
    case 1: break;
    case 2: break;
    default: break;
  }
});

benchmark('for loop', () => {
  for (let i = 0; i < 10; i++) {}
});

benchmark('while loop', () => {
  let i = 0;
  while (i < 10) { i++; }
});

benchmark('do-while loop', () => {
  let i = 0;
  do { i++; } while (i < 10);
});

benchmark('for-in loop', () => {
  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {}
});

benchmark('for-of loop', () => {
  const arr = [1, 2, 3, 4, 5];
  for (let val of arr) {}
});

benchmark('break statement', () => {
  for (let i = 0; i < 10; i++) {
    if (i === 5) break;
  }
});

benchmark('continue statement', () => {
  for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
  }
});

// ==================== TYPE CHECKING ====================
console.log('\n=== Type Checking ===');

benchmark('typeof operator', () => {
  const type = typeof 123;
});

benchmark('instanceof operator', () => {
  const arr = [];
  const is = arr instanceof Array;
});

benchmark('Array.isArray()', () => {
  const is = Array.isArray([]);
});

benchmark('Number.isNaN()', () => {
  const is = Number.isNaN(NaN);
});

benchmark('Number.isFinite()', () => {
  const is = Number.isFinite(123);
});

benchmark('Number.isInteger()', () => {
  const is = Number.isInteger(123);
});

// ==================== TYPE CONVERSION ====================
console.log('\n=== Type Conversion ===');

benchmark('String()', () => {
  const str = String(123);
});

benchmark('Number()', () => {
  const num = Number("123");
});

benchmark('Boolean()', () => {
  const bool = Boolean(1);
});

benchmark('parseInt()', () => {
  const num = parseInt("123");
});

benchmark('parseFloat()', () => {
  const num = parseFloat("123.45");
});

benchmark('toString()', () => {
  const str = (123).toString();
});

benchmark('toFixed()', () => {
  const str = (123.456).toFixed(2);
});

benchmark('toPrecision()', () => {
  const str = (123.456).toPrecision(4);
});

// ==================== MATH OPERATIONS ====================
console.log('\n=== Math Operations ===');

benchmark('Math.abs()', () => {
  const result = Math.abs(-5);
});

benchmark('Math.ceil()', () => {
  const result = Math.ceil(4.3);
});

benchmark('Math.floor()', () => {
  const result = Math.floor(4.7);
});

benchmark('Math.round()', () => {
  const result = Math.round(4.5);
});

benchmark('Math.trunc()', () => {
  const result = Math.trunc(4.9);
});

benchmark('Math.max()', () => {
  const result = Math.max(1, 2, 3);
});

benchmark('Math.min()', () => {
  const result = Math.min(1, 2, 3);
});

benchmark('Math.pow()', () => {
  const result = Math.pow(2, 10);
});

benchmark('Math.sqrt()', () => {
  const result = Math.sqrt(16);
});

benchmark('Math.cbrt()', () => {
  const result = Math.cbrt(27);
});

benchmark('Math.random()', () => {
  const result = Math.random();
});

benchmark('Math.sin()', () => {
  const result = Math.sin(Math.PI / 2);
});

benchmark('Math.cos()', () => {
  const result = Math.cos(0);
});

benchmark('Math.tan()', () => {
  const result = Math.tan(Math.PI / 4);
});

benchmark('Math.log()', () => {
  const result = Math.log(Math.E);
});

benchmark('Math.log10()', () => {
  const result = Math.log10(100);
});

benchmark('Math.exp()', () => {
  const result = Math.exp(1);
});

// ==================== DATE OPERATIONS ====================
console.log('\n=== Date Operations ===');

benchmark('new Date()', () => {
  const date = new Date();
}, SMALL_ITERATIONS);

benchmark('Date.now()', () => {
  const time = Date.now();
});

benchmark('Date.parse()', () => {
  const time = Date.parse("2023-01-01");
});

benchmark('Date.getTime()', () => {
  const date = new Date();
  const time = date.getTime();
});

benchmark('Date.getFullYear()', () => {
  const date = new Date();
  const year = date.getFullYear();
});

benchmark('Date.getMonth()', () => {
  const date = new Date();
  const month = date.getMonth();
});

benchmark('Date.getDate()', () => {
  const date = new Date();
  const day = date.getDate();
});

// ==================== REGEX OPERATIONS ====================
console.log('\n=== RegEx Operations ===');

benchmark('RegExp Creation (literal)', () => {
  const re = /test/;
});

benchmark('RegExp Creation (constructor)', () => {
  const re = new RegExp("test");
});

benchmark('RegExp.test()', () => {
  const re = /test/;
  const result = re.test("test string");
});

benchmark('RegExp.exec()', () => {
  const re = /test/;
  const result = re.exec("test string");
});

// ==================== JSON OPERATIONS ====================
console.log('\n=== JSON Operations ===');

benchmark('JSON.stringify()', () => {
  const str = JSON.stringify({ a: 1, b: 2 });
}, SMALL_ITERATIONS);

benchmark('JSON.parse()', () => {
  const obj = JSON.parse('{"a":1,"b":2}');
}, SMALL_ITERATIONS);

// ==================== ERROR HANDLING ====================
console.log('\n=== Error Handling ===');

benchmark('try-catch (no error)', () => {
  try {
    const x = 1;
  } catch (e) {}
});

benchmark('try-catch (with error)', () => {
  try {
    throw new Error("test");
  } catch (e) {}
}, SMALL_ITERATIONS);

benchmark('Error Creation', () => {
  const err = new Error("test");
}, SMALL_ITERATIONS);

// ==================== SET OPERATIONS ====================
console.log('\n=== Set Operations ===');

benchmark('new Set()', () => {
  const set = new Set();
});

benchmark('Set.add()', () => {
  const set = new Set();
  set.add(1);
});

benchmark('Set.has()', () => {
  const set = new Set([1, 2, 3]);
  const has = set.has(2);
});

benchmark('Set.delete()', () => {
  const set = new Set([1, 2, 3]);
  set.delete(2);
});

benchmark('Set.size', () => {
  const set = new Set([1, 2, 3]);
  const size = set.size;
});

benchmark('Set.clear()', () => {
  const set = new Set([1, 2, 3]);
  set.clear();
});

// ==================== MAP OPERATIONS ====================
console.log('\n=== Map Operations ===');

benchmark('new Map()', () => {
  const map = new Map();
});

benchmark('Map.set()', () => {
  const map = new Map();
  map.set("key", "value");
});

benchmark('Map.get()', () => {
  const map = new Map([["key", "value"]]);
  const val = map.get("key");
});

benchmark('Map.has()', () => {
  const map = new Map([["key", "value"]]);
  const has = map.has("key");
});

benchmark('Map.delete()', () => {
  const map = new Map([["key", "value"]]);
  map.delete("key");
});

benchmark('Map.size', () => {
  const map = new Map([["key", "value"]]);
  const size = map.size;
});

benchmark('Map.clear()', () => {
  const map = new Map([["key", "value"]]);
  map.clear();
});

// ==================== WEAKMAP & WEAKSET ====================
console.log('\n=== WeakMap & WeakSet ===');

benchmark('new WeakMap()', () => {
  const wm = new WeakMap();
});

benchmark('WeakMap.set()', () => {
  const wm = new WeakMap();
  const key = {};
  wm.set(key, "value");
});

benchmark('new WeakSet()', () => {
  const ws = new WeakSet();
});

benchmark('WeakSet.add()', () => {
  const ws = new WeakSet();
  const obj = {};
  ws.add(obj);
});

// ==================== PROMISE OPERATIONS ====================
console.log('\n=== Promise Operations ===');

benchmark('Promise Creation', () => {
  const p = new Promise((resolve) => resolve(1));
}, SMALL_ITERATIONS);

benchmark('Promise.resolve()', () => {
  const p = Promise.resolve(1);
}, SMALL_ITERATIONS);

benchmark('Promise.reject()', () => {
  const p = Promise.reject(1).catch(() => {});
}, SMALL_ITERATIONS);

// ==================== SYMBOL OPERATIONS ====================
console.log('\n=== Symbol Operations ===');

benchmark('Symbol()', () => {
  const sym = Symbol();
}, SMALL_ITERATIONS);

benchmark('Symbol.for()', () => {
  const sym = Symbol.for("key");
}, SMALL_ITERATIONS);

benchmark('Symbol.keyFor()', () => {
  const sym = Symbol.for("key");
  const key = Symbol.keyFor(sym);
}, SMALL_ITERATIONS);

// ==================== PROXY & REFLECT ====================
console.log('\n=== Proxy & Reflect ===');

benchmark('new Proxy()', () => {
  const proxy = new Proxy({}, {});
}, TINY_ITERATIONS);

benchmark('Proxy get trap', () => {
  const proxy = new Proxy({ a: 1 }, {
    get(target, prop) { return target[prop]; }
  });
  const val = proxy.a;
}, SMALL_ITERATIONS);

benchmark('Reflect.get()', () => {
  const obj = { a: 1 };
  const val = Reflect.get(obj, "a");
});

benchmark('Reflect.set()', () => {
  const obj = {};
  Reflect.set(obj, "a", 1);
});

benchmark('Reflect.has()', () => {
  const obj = { a: 1 };
  const has = Reflect.has(obj, "a");
});

// ==================== CLASS OPERATIONS ====================
console.log('\n=== Class Operations ===');

benchmark('Class Declaration', () => {
  class MyClass {}
});

benchmark('Class Instantiation', () => {
  class MyClass {}
  const instance = new MyClass();
}, SMALL_ITERATIONS);

benchmark('Class Method Call', () => {
  class MyClass {
    method() { return 1; }
  }
  const instance = new MyClass();
  instance.method();
}, SMALL_ITERATIONS);

benchmark('Class Static Method', () => {
  class MyClass {
    static method() { return 1; }
  }
  MyClass.method();
});

benchmark('Class Getter', () => {
  class MyClass {
    get value() { return 1; }
  }
  const instance = new MyClass();
  const val = instance.value;
}, SMALL_ITERATIONS);

benchmark('Class Setter', () => {
  class MyClass {
    set value(v) { this._value = v; }
  }
  const instance = new MyClass();
  instance.value = 1;
}, SMALL_ITERATIONS);

// ==================== TYPED ARRAYS ====================
console.log('\n=== Typed Arrays ===');

benchmark('Int8Array Creation', () => {
  const arr = new Int8Array(10);
}, SMALL_ITERATIONS);

benchmark('Uint8Array Creation', () => {
  const arr = new Uint8Array(10);
}, SMALL_ITERATIONS);

benchmark('Int16Array Creation', () => {
  const arr = new Int16Array(10);
}, SMALL_ITERATIONS);

benchmark('Int32Array Creation', () => {
  const arr = new Int32Array(10);
}, SMALL_ITERATIONS);

benchmark('Float32Array Creation', () => {
  const arr = new Float32Array(10);
}, SMALL_ITERATIONS);

benchmark('Float64Array Creation', () => {
  const arr = new Float64Array(10);
}, SMALL_ITERATIONS);

// ==================== ARRAYBUFFER ====================
console.log('\n=== ArrayBuffer ===');

benchmark('ArrayBuffer Creation', () => {
  const buffer = new ArrayBuffer(1024);
}, SMALL_ITERATIONS);

benchmark('DataView Creation', () => {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
}, SMALL_ITERATIONS);

// ==================== ITERATOR & GENERATOR ====================
console.log('\n=== Iterator & Generator ===');

benchmark('Array Iterator', () => {
  const arr = [1, 2, 3];
  const iter = arr[Symbol.iterator]();
});

benchmark('Generator Next', () => {
  function* gen() { yield 1; yield 2; }
  const g = gen();
  g.next();
}, SMALL_ITERATIONS);

// ==================== DESTRUCTURING ====================
console.log('\n=== Destructuring ===');

benchmark('Array Destructuring', () => {
  const [a, b] = [1, 2];
});

benchmark('Object Destructuring', () => {
  const { a, b } = { a: 1, b: 2 };
});

benchmark('Rest Parameters', () => {
  function fn(...args) {}
  fn(1, 2, 3);
});

// ==================== TEMPLATE LITERALS ====================
console.log('\n=== Advanced String Features ===');

benchmark('Tagged Template Literal', () => {
  function tag(strings, ...values) { return strings[0]; }
  const result = tag`Hello`;
}, SMALL_ITERATIONS);

// ==================== INTERNATIONALIZATION ====================
console.log('\n=== Internationalization ===');

benchmark('Intl.DateTimeFormat', () => {
  const fmt = new Intl.DateTimeFormat('en-US');
}, TINY_ITERATIONS);

benchmark('Intl.NumberFormat', () => {
  const fmt = new Intl.NumberFormat('en-US');
}, TINY_ITERATIONS);

// ==================== RESULTS ====================
console.log('\n' + '='.repeat(60));
console.log('BENCHMARK RESULTS (Sorted by Duration)');
console.log('='.repeat(60));

// Sort results by duration
results.sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));

// Display results in table format
console.log('\n');
console.log('Rank | Feature Name | Duration (ms) | Iterations | Avg/Op (ns)');
console.log('-'.repeat(80));

results.forEach((result, index) => {
  const rank = (index + 1).toString().padStart(4);
  const name = result.name.padEnd(40);
  const duration = result.duration.padStart(12);
  const iterations = result.iterations.toString().padStart(10);
  const avgPerOp = result.avgPerOp.padStart(12);
  console.log(`${rank} | ${name} | ${duration} | ${iterations} | ${avgPerOp}`);
});

console.log('\n' + '='.repeat(60));
console.log(`Total Features Benchmarked: ${results.length}`);
console.log(`Fastest: ${results[0].name} (${results[0].duration}ms)`);
console.log(`Slowest: ${results[results.length - 1].name} (${results[results.length - 1].duration}ms)`);
console.log('='.repeat(60));
