# Arrays

Arrays in JavaScript are powerful and flexible structures for storing ordered collections of data.

## Creating Arrays

```javascript
const emptyArray = [];
const numberArray = [1, 2, 3, 4];
const stringArray = ['a', 'b', 'c'];
const mixedArray = [1, 'a', true, null];
```

## Method Categories

### Adding/Removing Elements

#### .push() / .pop()

Add or remove elements from the end of an array.

```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']
fruits.pop(); // ['apple', 'banana']
```

#### .unshift() / .shift()

Add or remove elements from the beginning of an array.

```javascript
fruits.unshift('strawberry'); // ['strawberry', 'apple', 'banana']
fruits.shift(); // ['apple', 'banana']
```

#### .splice()

Add, remove, or replace elements at any index.

```javascript
fruits.splice(1, 0, 'mango'); // Inserts 'mango' at index 1
```

### Searching Elements

#### .indexOf() / .lastIndexOf()

Find the index of an element.

```javascript
const numbers = [1, 2, 3, 2, 1];
numbers.indexOf(2); // 1
numbers.lastIndexOf(2); // 3
```

#### .find()

Return the first element that matches a condition.

```javascript
const found = numbers.find((element) => element > 2);
console.log(found); // 3
```

#### .filter()

Return a new array containing elements that match a condition.

```javascript
const filtered = numbers.filter((element) => element > 1);
console.log(filtered); // [2, 3, 2]
```

### Transforming Arrays

#### .map()

Create a new array by transforming every element with a function.

```javascript
const doubled = numbers.map((element) => element * 2);
console.log(doubled); // [2, 4, 6, 4, 2]
```

#### .reduce()

Reduce all elements of the array into a single output value.

```javascript
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 9
```

### Iterating Over Arrays

#### .forEach()

Execute a function for each array element.

```javascript
numbers.forEach((element) => console.log(element)); // Logs each number
```

#### .some() / .every():

Check if some or all elements pass a test.

```js
const array = [1, 2, 3, 4, 5];

// Check if the array contains any elements greater than 3
const hasElementsGreaterThanThree = array.some((element) => element > 3);

console.log(hasElementsGreaterThanThree); // Output: true
```

```js
const array = [1, 2, 3, 4, 5];

// Check if all elements in the array are less than 6
const allElementsLessThanSix = array.every((element) => element < 6);

console.log(allElementsLessThanSix); // Output: true
```

## Comparison

### .find() vs. .filter()

- **.find()** returns the first element that satisfies the condition.

```javascript
const firstOverOne = numbers.find((n) => n > 1); // 2
```

- **.filter()** returns all elements that satisfy the condition, as a new array.

```javascript
const allOverOne = numbers.filter((n) => n > 1); // [2, 3, 2]
```

### .push() vs. .unshift()

- **.push()** adds elements to the end.
- **.unshift()** adds elements to the beginning.

## Common mistakes and best practices

### Forgetting Return in .map() and .filter()

Always include a return statement inside the callback function for `.map()` and `.filter()`.

### Using .splice() incorrectly

Be cautious with `.splice()` as it modifies the original array. Always check the index and number of elements you intend to remove or add.
