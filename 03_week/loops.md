# Loops

Loops are a fundamental programming concept that allows you to repeat a block of code multiple times. They are particularly useful for iterating over collections, repeating tasks, and automating repetitive processes.

## The for Loop

The `for` loop is one of the most common loops. It's used when you know in advance how many times you want to execute a statement.

```js
for (initialization; condition; increment) {
  // Code to be executed on each iteration
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## The while Loop

The `while` loop continues to execute a block of code as long as the specified condition is true.

```js
while (condition) {
  // Code to be executed as long as the condition is true
}
```

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## The do-while Loop

The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once.

```js
do {
  // Code to be executed
} while (condition);
```

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## The for...in Loop

The `for...in` loop is used to iterate over the properties of an object.

```js
for (key in object) {
  // Code to be executed for each property
}
```

```js
const person = { name: 'Alice', age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## The for...of Loop

The `for...of` loop creates a loop iterating over iterable objects (like arrays, strings).

```js
for (variable of iterable) {
  // Code to be executed for each element
}
```

```js
let fruits = ['apple', 'banana', 'pear'];
for (let fruit of fruits) {
  console.log(fruit);
}
```

## Loop Control Statements

- `**break**`: Terminates the loop.
- `**continue**`: Skips the current iteration and continues with the next one.
