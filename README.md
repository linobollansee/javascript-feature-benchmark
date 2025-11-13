# JavaScript Feature Benchmark

A comprehensive benchmarking tool that tests and compares the performance of various JavaScript features, operations, and APIs. The benchmark runs millions of iterations for each feature and provides detailed performance metrics sorted by execution time.

## Features

This benchmark tests over 100+ JavaScript features across multiple categories:

- **Variables & Primitives**: Variable declarations (let, const, var), primitive type creation
- **Arithmetic Operations**: Addition, subtraction, multiplication, division, modulo, exponentiation
- **Comparison Operators**: Equality, strict equality, greater/less than comparisons
- **Logical Operators**: AND, OR, NOT, nullish coalescing, optional chaining
- **Bitwise Operators**: AND, OR, XOR, NOT, shift operations
- **String Operations**: Concatenation, template literals, charAt, substring, split, etc.
- **Array Operations**: Push, pop, shift, unshift, slice, splice, map, filter, reduce
- **Object Operations**: Property access, creation, spread, Object.keys/values/entries
- **Functions**: Regular functions, arrow functions, closures, IIFE, recursion
- **Control Flow**: If statements, ternary operators, switch statements, loops
- **Classes & OOP**: Class creation, inheritance, getters/setters, static methods
- **Async Operations**: Promises, async/await, setTimeout
- **Error Handling**: Try/catch blocks, Error creation, custom errors
- **Type Conversion**: Number(), String(), Boolean(), parseInt, parseFloat
- **Regular Expressions**: RegExp creation, test, match, replace
- **Math Operations**: Math.floor, Math.ceil, Math.round, Math.random, etc.
- **Date & Time**: Date creation, getTime, toISOString, Date.now
- **JSON Operations**: JSON.parse, JSON.stringify
- **Map & Set**: Map/Set creation and operations
- **WeakMap & WeakSet**: Weak reference collections
- **Symbols**: Symbol creation and usage
- **Proxy & Reflect**: Proxy creation, Reflect API
- **Typed Arrays**: Int8Array, Uint8Array, Float32Array, etc.
- **ArrayBuffer**: Buffer creation, DataView
- **Iterators & Generators**: Iterator protocol, generator functions
- **Destructuring**: Array and object destructuring
- **Internationalization**: Intl.DateTimeFormat, Intl.NumberFormat

## Usage

Run the benchmark using Node.js:

```bash
node benchmark.js
```

## Output

The benchmark provides:

1. **Real-time progress**: Each feature test displays a checkmark and duration as it completes
2. **Detailed results table**: Sorted by execution time (fastest to slowest)
   - Rank
   - Feature name
   - Total duration (milliseconds)
   - Number of iterations
   - Average time per operation (nanoseconds)
3. **Summary statistics**: Total features benchmarked, fastest and slowest operations

### Example Output

```
✓ Variable Declaration (let): 2.3456ms
✓ Variable Declaration (const): 2.4567ms
...

============================================================
BENCHMARK RESULTS (Sorted by Duration)
============================================================

Rank | Feature Name                             | Duration (ms) | Iterations | Avg/Op (ns)
------------------------------------------------------------------------------------
   1 | Variable Declaration (let)               |       2.3456 |    1000000 |      2.3456
   2 | Variable Assignment                      |       2.4567 |    1000000 |      2.4567
...

============================================================
Total Features Benchmarked: 150+
Fastest: Variable Declaration (let) (2.3456ms)
Slowest: [Feature Name] ([X]ms)
============================================================
```

## Benchmark Configuration

- **ITERATIONS**: 1,000,000 (for fast operations)
- **SMALL_ITERATIONS**: 10,000 (for medium-speed operations)
- **TINY_ITERATIONS**: 1,000 (for slow operations like Promises, async operations)

Each test includes a warmup phase (100 iterations) to eliminate JIT compilation effects from the measurements.

## Requirements

- Node.js (v12 or higher recommended)
- No external dependencies required

## Performance Notes

- Results may vary based on JavaScript engine (V8, SpiderMonkey, JavaScriptCore)
- CPU, memory, and system load affect benchmark results
- Run multiple times for consistent measurements
- Close other applications for more accurate results

## License

MIT

## Contributing

Feel free to add more benchmark tests or suggest improvements!
