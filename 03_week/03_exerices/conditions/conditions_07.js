/**
Develop a function named assignGrade that:

Accepts a single argument, a numerical score.
Returns a letter grade for the score based on these criteria:
- 'A' for scores 90 and above.
- 'B' for scores 80 to 89.
- 'C' for scores 70 to 79.
- 'D' for scores 60 to 69.
- 'F' for scores below 60.

*/

const assignGrade = (number) => {
  if (number >= 90) {
    return 'A';
  } else if (number >= 80 && number < 90) {
    return 'B';
  } else if (number >= 70 && number < 80) {
    return 'C';
  } else if (number >= 60 && number < 70) {
    return 'D';
  } else {
    return 'F';
  }
};

// Sample usage - do not modify
console.log('You got a ' + assignGrade(95)); // You got a A
console.log('You got a ' + assignGrade(81)); // You got a B
console.log('You got a ' + assignGrade(72)); // You got a C
console.log('You got a ' + assignGrade(64)); // You got a D
console.log('You got a ' + assignGrade(42)); // You got a F
