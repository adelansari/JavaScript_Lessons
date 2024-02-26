# Error handling

When it comes to handling errors and debugging in JavaScript, especially for beginners, it's crucial to understand some foundational concepts and techniques that can significantly ease the development process. Here's a guide based on the previous example of filtering odd years from an array:

```javascript
function getOddYears(years) {
  return yeas.filter((year) => year % 2 !== 0); // Misspelled variable name
}
```

If you try to run this code, you'll receive an error message indicating that `yeas` is not defined. Reading and understanding these messages is the first step in debugging.

## Console Logging for Debugging

One of the simplest yet most powerful tools for debugging is `console.log()`. By logging variables or expressions to the console, you can check the state of your program at various points.

```javascript
function getOddYears(years) {
  console.log(years); // Check the input
  const oddYears = years.filter((year) => year % 2 !== 0);
  console.log(oddYears); // Check the output
  return oddYears;
}
```

## Using `debugger` Statement

The `debugger` statement can pause execution within your function and open up your browser's debugging tools. This allows you to inspect variables, step through code line by line, and understand how data changes throughout your function.

```javascript
function getOddYears(years) {
  debugger; // Execution will pause here in the browser
  return years.filter((year) => year % 2 !== 0);
}
```

## Try-Catch for Runtime Errors

Sometimes, errors occur during the execution of your code that you didn't anticipate. Using `try-catch` blocks allows you to handle these errors gracefully without crashing your script. You can catch errors and decide how to respond instead of letting the script fail.

```javascript
function getOddYears(years) {
  try {
    return years.filter((year) => year % 2 !== 0);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

```javascript
try {
  // Attempt risky operation
  let result = riskyOperation();
  console.log('Operation successful:', result);
} catch (error) {
  // Handle any errors that occurred
  console.error('An error occurred during the operation:', error);
} finally {
  // Cleanup code that runs regardless of the operation's outcome
  console.log('Operation attempt finished.');
}
```

## Reading Documentation

Understanding built-in methods, their parameters, return values, and possible side effects requires reading the documentation. For instance, knowing that `.filter()` does not modify the original array but returns a new one is crucial information that can affect how you write your code.

## Error Types in JavaScript

JavaScript has several built-in error types, including `ReferenceError`, `TypeError`, `SyntaxError`, and more. Recognizing these can help you quickly diagnose problems.

Understanding different types of errors in JavaScript can significantly help in diagnosing and fixing issues in your code more efficiently. Here are some common error types encountered in JavaScript, along with explanations and examples for each:

### SyntaxError

Occurs when there's a problem with the syntax of your code. This could be due to missing brackets, typos, or incorrect use of language constructs.

```javascript
function myFunction() {
    console.log("Hello World";
}
// Missing closing parenthesis will throw a SyntaxError
```

### ReferenceError

Happens when you try to reference a variable that has not been declared.

#### Example:

```javascript
function showName() {
  console.log(name);
}
showName(); // Throws ReferenceError if 'name' is not defined
```

### TypeError

Occurs when an operation is performed on a value of an incorrect type, such as trying to invoke something that's not a function or accessing a property on `undefined`.

```javascript
let someText = 'Hello, World!';
someText.split(); // Works fine
someText = null;
someText.split(); // Throws TypeError because null doesn't have a split method
```

### RangeError

This error is thrown when a value is not within the expected range. For instance, trying to create an array with a negative length.

```javascript
let numbers = new Array(-5); // Throws RangeError
```

### URIError

Occurs with improper use of global URI handling functions like `encodeURI()` or `decodeURI()` when passing invalid parameters.

#### Example:

```javascript
decodeURI('%'); // Throws URIError due to incomplete URI component
```

### Debugging Tips

- **Use `console.log` strategically** to inspect the flow and state of your code.
- **Utilize breakpoints and the debugging tools** in your browser's developer console to step through code execution.
- **Read error messages carefully;** they often provide valuable hints on where and why the error occurred.

## throw Error

The `throw` statement allows you to create a custom error and "throw" it as an exception. When you `throw` an exception using `throw`, the execution of the current function stops, and the control is passed to the first `catch` block in the call stack. If no `catch` block exists among caller functions, the program terminates, and an error message is displayed.

The `new Error()` constructor creates an error object instance. The `Error` object can optionally contain a message that describes the error. When combined, `throw new Error()` is a way to generate a custom error and interrupt the flow of execution, providing an opportunity to handle the error gracefully with `try...catch` structures.

```js
throw new Error('Error message');
```

```js
function checkNumber(num) {
  if (isNaN(num)) {
    throw new Error('Input must be a number');
  }
  console.log('The number is', num);
}

try {
  checkNumber('test'); // This is not a number, so an error will be thrown
} catch (error) {
  console.error(error.message); // Logs "Input must be a number"
}
```
