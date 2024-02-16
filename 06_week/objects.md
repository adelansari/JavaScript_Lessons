# Objects

JavaScript objects are fundamental constructs that allow you to store collections of data and more complex entities in a structured way. They group data and functions together, offering a flexible mechanism to model real-world entities.

## Creating objects

An object can be created using object literals, constructor functions, or the `class` syntax introduced in ES6.

### Object literals

```js
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
};
```

### Constructor functions

```js
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const person1 = new Person('Alice', 'Johnson', 30);
```

### ES6 Class Syntax

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const person2 = new Person('Bob', 'Smith', 28);
```

## Accessing and modifying properties

You can access properties using the dot notation or the bracket notation. Properties can be updated or added in a similar manner.

```js
console.log(person.firstName); // Access
person.lastName = 'Doe'; // Modify
```

### Dot Notation

Dot notation is straightforward and commonly used for property access when the property name is known and directly accessible.

```javascript
const person = {
  name: 'Alice',
  age: 30,
};

console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30
```

### Bracket Notation

Bracket notation is versatile, allowing access to properties using variables and accommodating property names that include spaces or special characters.

```javascript
const property = 'name';
console.log(person[property]); // Outputs: Alice

const person = {
  'full name': 'Alice Johnson',
};

console.log(person['full name']); // Outputs: Alice Johnson
```

## Modifying Properties

Properties of an object can be updated using both dot and bracket notations.

### Dot Notation

```javascript
person.age = 31;
console.log(person.age); // Outputs: 31
```

### Bracket Notation

```javascript
person['age'] = 32;
console.log(person.age); // Outputs: 32
```

## Adding Properties

New properties can be added to an object using both notations.

### Dot Notation

```javascript
person.email = 'alice@example.com';
console.log(person.email); // Outputs: alice@example.com
```

### Bracket Notation

```javascript
person['phoneNumber'] = '123-456-7890';
console.log(person['phoneNumber']); // Outputs: 123-456-7890
```

## Removing Properties

The `delete` operator is used to remove properties from an object, working with both dot and bracket notations.

```javascript
delete person.age;
console.log(person.age); // Outputs: undefined

delete person['phoneNumber'];
console.log(person.phoneNumber); // Outputs: undefined
```

### Summary

- **Dot Notation** is simple and concise, ideal for accessing or modifying properties with names that are valid identifiers.
- **Bracket Notation** offers flexibility for property names that are dynamically determined, include spaces, or start with numbers.
- Properties can be added to objects at any time using either notation.
- The `delete` operator removes an existing property from an object.

## Object methods

Methods are functions that are properties of an object. They can use `this` to access other properties of the object.

```js
const person = {
  name: 'Jane',
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet();
```

## Prototypes and inheritance

JavaScript uses prototypal inheritance. A prototype is an object from which other objects inherit properties.

```js
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
};
```

## The `this` Keyword

The `this` keyword refers to the object that the function is a property of. Its value can change depending on how the function is called.

## JSON and Object Conversion

Converting objects to JSON and back is a common task in web development.

```js
const jsonString = JSON.stringify(person); // Object to JSON
const jsonObject = JSON.parse(jsonString); // JSON back to object
```
