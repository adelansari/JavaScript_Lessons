# Scope

Scope in JavaScript refers to the accessibility of variables and functions at various parts of your code. It dictates where variables and functions can be accessed or referenced.

## Types of Scope

- **`Global Scope:`** Variables defined outside any function or block are in the global scope and are accessible from anywhere in the code.

- **`Local (Function) Scope`**: Variables declared within a function are in the local scope and are only accessible within that function.

- **`Block Scope (ES6)`**: Introduced in ES6, let and const declarations are block-scoped, meaning they are only accessible within the block they are defined in.

## Hoisting in JavaScript

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. It allows functions and variables to be used before they are declared.

Examples of Scope and Hoisting
Global Scope Example:

javascript
Copy code
let globalVar = "I am a global variable";

function exampleFunction() {
console.log(globalVar); // Accessible here
}

console.log(globalVar); // Also accessible here
Local Scope Example:

javascript
Copy code
function exampleFunction() {
let localVar = "I am a local variable";
console.log(localVar); // Accessible here
}

console.log(localVar); // Uncaught ReferenceError: localVar is not defined
Block Scope Example (ES6):

javascript
Copy code
if (true) {
let blockVar = "I am a block-scoped variable";
console.log(blockVar); // Accessible here
}

console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
Hoisting Example:

javascript
Copy code
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

function hoistedFunction() {
console.log('I am hoisted');
}
hoistedFunction(); // Works fine
Best Practices
Prefer let and const over var to avoid unintended consequences of hoisting.
Declare variables at the top of their scope for clarity.
Keep global variables to a minimum to avoid cluttering the global namespace.
Common Pitfalls
Not understanding the difference between var, let, and const.
Accidentally overwriting global variables due to scope misunderstandings.
Assuming that block-scoped variables (with let and const) will behave like function-scoped (var) variables.
