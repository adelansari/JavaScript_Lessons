# Numbers

- 1
- 2
- -5
- 3.5
- 2000
- 2021
- -23.51

In JavaScript, these are all considered as **Numbers**. Whether they are negative or positive, or even if they include decimal points, they fall under the category of numbers.

## Converting numbers to strings

While it's not a common practice, transforming a number into a string is quite straightforward in JavaScript. This can be achieved using the `.toString()` method. Consider an example where we declare a variable named `answer`, assigned with the numerical value of `42`. Here's how you can convert this number to a string:

```js
let answer = 42;
let stringAnswer = answer.toString(); // Converts to "42"
```

In this case, stringAnswer will be a string representation of the number 42.

## NaN

Occasionally, you might come across `NaN` in your JavaScript code. This stands for **Not a Number** and typically indicates an issue within your code, often related to inappropriate data types being used in calculations. For instance, attempting to multiply a string with a number, which is generally not advisable, results in `NaN`:

```js
// Example of what not to do:
"abc" * 4; // This will yield NaN
```

Encountering `NaN` usually suggests a data type error, such as forgetting to convert a string into a number. A common scenario involves an object property that unintentionally holds `undefined` due to a typo, and then being used in calculations as if it were a valid number. This topic will be explored in greater detail in upcoming chapters, particularly when discussing objects and their properties.

## Convert strings to numbers

In JavaScript, converting strings into numbers is a fundamental and frequently encountered operation. This is typically achieved using the Number.parseInt() function. To illustrate, consider a scenario where we have a string str with the value "42" and we need to convert it into a numerical value.

```js
let str = "42";
let numericValue = Number.parseInt(str, 10); // Converts to 42
```

The Number.parseInt() function is part of the global Number object and is used to convert a string into an integer. It takes two arguments:

```js
Number.parseInt(string, radix);
```

The first parameter is the string that you'd like to convert into a number. The second argument is the `radix` that will be used in the conversion.
The `radix` is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is **10** which represents the decimal system.

Another example of radix is **2** which represents binary (a numerical system used by computers).

### Legacy notes

`Number.parseInt()` and `parseInt()` are exactly the same thing. Prefer `Number.parseInt()` over `parseInt()`

A while ago, parseInt(string, radix) was the only way to convert numbers, however, a while later, this function has been cloned under the Number object and became Number.parseInt(string, radix) in an effort to group similar functions together under their relevant object. They both work exactly the same.

## Use cases for converting to a number

Converting a string to a number is particularly useful in situations where user input or data retrieved from the Document Object Model (DOM) is in string format but needs to be processed numerically. For instance:

```js
let a = 10;
let b = "20"; // Initially a string
b = Number.parseInt(b, 10); // Now converted to a number
let sum = a + b; // Correctly adds up to 30
```

The `Number.parseInt()` method will try to convert the string it receives into a number. As you can see below, it
most often works when the string starts with a number and ends with non-numeric values:

```js
Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5
```

## Number methods

While there are some other methods you could call on numbers, they are not very commonly used. What is commonly used, however,
is the `Math` object which contains methods such as `min()`, `max()` , `round()`, etc.
