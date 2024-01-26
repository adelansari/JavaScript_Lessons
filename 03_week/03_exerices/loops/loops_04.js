// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let numberTotal = 20;
let evenCount = 0;

while (numberTotal > 0) {
  let inputNumbers = Number(prompt('Enter any number:'));
  if (inputNumbers % 2 == 0) {
    evenCount++;
  }
  numberTotal--;
}

console.log(evenCount);
