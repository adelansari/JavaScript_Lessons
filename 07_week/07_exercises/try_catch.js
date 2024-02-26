'use strict';

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  // Simulate error

  try {
    throw new Error('Oops, something went wrong!');
  } catch (error) {
    console.log(`An error occurred. Error message: ${error.message}`);
  }
}
// Calling task1 function
// task1();

/* -------------------------------------- */
/* -------------------------------------- */

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  // Code here
  try {
    console.log(foxes);
  } catch (error) {
    console.log(error);
  }
}

// Calling task2 function
// task2();

/* -------------------------------------- */
/* -------------------------------------- */

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  // Code here
  try {
    console.log(foxes);
  } catch (error) {
    console.log(`Error message: ${error.message}`);
  } finally {
    console.log('Execution completed');
  }
}

// Calling task3 function
// task3();

/* -------------------------------------- */
/* -------------------------------------- */

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  // Code here
  try {
    try {
      throw new Error('Oops, something went wrong!');
    } catch (error) {
      console.log(`Nested error: ${error.message}`);
    }
  } catch (error) {
    console.log(`Outer error: ${error.message}`);
  }
}

// Calling task4 function
// task4();

/* -------------------------------------- */
/* -------------------------------------- */

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  try {
    if (array[index] === undefined) {
      throw new Error(`Invalid index: ${index}`);
    }
    console.log(array[index]);
  } catch (error) {
    console.log(`Error message: ${error.message}`);
  }
}

// Calling task5 function
task5([1, 2, 3], 4);
