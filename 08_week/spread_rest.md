# Spread and rest

The spread and rest operators, introduced in ECMAScript 2015 (ES6), are denoted by three dots .... Despite their similar syntax, they serve different purposes depending on the context in which they are used.

## Spread operator

- **Expands iterable objects:** Used to expand elements of an iterable (like an array) into individual elements in places like function calls or array literals.

```js
// Expands an array into individual arguments.
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Outputs: 3
```

- **Cloning arrays:** Enables shallow copying of arrays efficiently.

```js
const original = ['a', 'b', 'c'];
const copy = [...original]; // ['a', 'b', 'c']
```

- **Concatenating arrays:** Facilitates the concatenation of multiple arrays into one.

```js
const first = [1, 2];
const second = [3, 4];
const combined = [...first, ...second]; // [1, 2, 3, 4]
```

- **Working with objects:** Helps in combining properties from different objects into a single object (object literals only).

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

## Rest operator

- **Collects function arguments:** Aggregates a varying number of arguments passed to a function into a single array.

```js
function concatenate(separator, ...args) {
  return args.join(separator);
}
console.log(concatenate('.', 'a', 'b', 'c')); // "a.b.c"
```

- **Used in function declarations:** Helps functions accept an indefinite number of arguments as an array.

```js
function sumAll(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sumAll(1, 2, 3)); // Outputs: 6
console.log(sumAll(10, 20, 30, 40, 50)); // Outputs: 150
```

- **Destructuring arrays and objects:** Allows for extracting multiple elements or properties into a single array or object.

```js
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]
```

```js
const { x, ...y } = { x: 1, y: 2, z: 3 };
console.log(x); // 1
console.log(y); // { y: 2, z: 3 }
```
