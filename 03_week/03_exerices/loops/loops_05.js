// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let sumNumber = 0;
let totalNumbers = 0;

for (let inputNumber; inputNumber != 0; totalNumbers++) {
  inputNumber = Number(prompt('Input numbers (type 0 to terminate):'));
  if (inputNumber == 0) break;
  sumNumber += inputNumber;
}

console.log(`The average of all entered numbers is ${sumNumber / totalNumbers}`);
