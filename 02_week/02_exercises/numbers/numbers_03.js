/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

const num1 = 420.12;
const num2 = 23.334;

// rounding to the nearest integer
const roundedNum1 = Math.round(num1);
const roundedNum2 = Math.round(num2);

// square root of number
const sqrtNum1 = Math.sqrt(roundedNum1);
const maxNum = Math.max(roundedNum1, roundedNum2);
console.log(`roundedNum1 is ${roundedNum1}`);
console.log("The type of 'roundedNum1' is", typeof roundedNum1);
console.log(`roundedNum2 is ${roundedNum2}`);
console.log("The type of 'roundedNum2' is", typeof roundedNum2);
console.log(`sqrtNum1 is ${sqrtNum1}`);
console.log("The type of 'sqrtNum1' is", typeof sqrtNum1);
console.log(`maxNum is ${maxNum}`);
console.log("The type of 'maxNum' is", typeof maxNum);
