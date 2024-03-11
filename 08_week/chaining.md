# Chaining

Chaining is a powerful concept in JavaScript, particularly with arrays, allowing you to combine multiple methods in a single statement. This approach is efficient and concise, enabling you to perform complex operations with minimal code.

```js
const users = [
  { id: 1, name: 'Sam Doe' },
  { id: 2, name: 'Alex Blue' },
];

const csv = users.map((user) => user.name).join(', ');
console.log(csv); // "Sam Doe, Alex Blue"
```

## Optional Chaining

Optional chaining (`?.`) simplifies accessing nested properties. It prevents errors by returning `undefined` if a reference is nullish (`null` or `undefined`), rather than throwing an error.

```js
const user = {
  details: { name: { firstName: 'Sam' } },
};

console.log(user.details?.name?.firstName); // "Sam"
```

### Usage in Arrays

It also applies to arrays, making data retrieval safer:

```js
const data = { temperatures: [-3, 14, 4] };
const firstValue = data.temperatures?.[0]; // -3
```

### Function Calls

For functions, it ensures the function is called only if it exists, avoiding runtime errors:

```js
const person = { name: 'Sam' };
const upperCasedName = person.name?.toUpperCase(); // "SAM"
```
