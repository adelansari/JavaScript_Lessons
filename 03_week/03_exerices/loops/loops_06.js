// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

let giveNumbers = 'y';
let countNumbers = 0;
let sumNumbers = 0;

while (giveNumbers == 'y') {
  let inputNumber = Number(prompt('Please input a single number.'));

  if (isNaN(inputNumber)) {
    alert('That is not a number. Please try again.');
    continue;
  }
  if (!inputNumber) {
    alert('The input cannot be empty. Please try again.');
    continue;
  }
  sumNumbers += inputNumber;
  countNumbers++;

  giveNumbers = String(prompt('Do you want to continue giving numbers? (y/n)'));
  if (typeof giveNumbers === 'string') {
    while (giveNumbers != 'n' && giveNumbers != 'y') {
      giveNumbers = String(
        prompt('To continue, you must type "y", otherwise type "n".')
      );
      if (giveNumbers == 'n') {
        break;
      }
    }
  }
}

console.log(
  `The average of all entered numbers is ${sumNumbers / countNumbers}`
);
