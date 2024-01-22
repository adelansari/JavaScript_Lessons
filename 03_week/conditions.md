# Conditions

Conditional statements are a vital part of JavaScript programming, enabling decision-making based on certain conditions. Here's a structured approach to understanding these concepts.

## Basic if Statement

The if statement evaluates a condition and executes code blocks based on whether the condition is true:

```js
if (condition) {
  // Code to execute if condition is true
}
```

For instance:

```js
const age = 20;

if (age >= 18) {
  console.log('Adult');
}
```

This code will output "Adult" if the age is 18 or more.

## Adding an else Block

To handle cases where the if condition is false, use an else block:

```js
const score = 65;

if (score >= 75) {
  console.log('Passed');
} else {
  console.log('Failed');
}
```

This will output "Failed" for scores below 75.

## Using else if for Multiple Conditions

For more than two possible outcomes, use else if:

```js
const temperature = 30;

if (temperature > 30) {
  console.log("It's hot outside");
} else if (temperature === 30) {
  console.log("It's warm outside");
} else {
  console.log("It's cool outside");
}
```

This example checks multiple conditions about the weather.

## Understanding Ligatures

Ligatures are a visual enhancement in some code editors where certain character combinations are displayed as a single glyph:

- `>= `(greater than or equal to)
- `<=` (less than or equal to)
- `===` (strict equality)
- `!==` (strict inequality)

## Simplifying with Return Statements

Functions can be simplified by removing else if a return statement ends the function:

```js
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
```

This function will immediately exit with true if the age is 18 or more; otherwise, it returns false.

## Returning Booleans Directly

When returning a boolean, simplify the function by returning the condition itself:

```js
function isEligibleForVote(age) {
  return age >= 18;
}
```

This returns true or false based on whether the age meets the condition.

## Identifying Even and Odd Numbers

To determine if a number is even or odd, use the modulus operator (%):

```js
// Checking for even numbers
8 % 2; // 0, hence even
10 % 2; // 0, hence even

// Checking for odd numbers
7 % 2; // 1, hence odd
9 % 2; // 1, hence odd
```

A remainder of 0 indicates an even number, while 1 indicates an odd number.

## The switch Statement

The switch statement is an alternative to if statements when you have multiple conditions to check. It's especially useful when comparing the same variable against different values.

```js
switch (expression) {
  case value1:
    // Code to execute when expression equals value1
    break;
  case value2:
    // Code to execute when expression equals value2
    break;
  // Additional cases as needed
  default:
  // Code to execute if no case is matched
}
```

```js
let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
}
```

## When to Use switch vs if

- Use `switch` when comparing the same variable or expression to many constant values.
- Use `if` statements when evaluating different conditions or ranges of values.
