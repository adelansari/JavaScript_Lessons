// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let numberTotal = Number(prompt('How many numbers would you like to input?'));

while (!Number.isInteger(numberTotal) || numberTotal < 1) {
  if (!Number.isInteger(numberTotal)) {
    alert('Please enter an integer number.');
  }
  if (numberTotal < 1) {
    alert('Please enter a positive number');
  }
  numberTotal = Number(prompt('How many numbers would you like to input?'));
}

let min, max;

for (let inputNumber = 1; inputNumber <= numberTotal; inputNumber++) {
  let userNumbers = Number(prompt(`Enter number ${inputNumber} out of ${numberTotal} :`));

  while (isNaN(userNumbers)) {
    alert('Please enter a valid number.');
    userNumbers = Number(prompt(`Enter number ${inputNumber} out of ${numberTotal} :`));
  }

  if (inputNumber === 1) {
    min = max = userNumber;
  } else {
    userNumber < min ? (min = userNumber) : (max = userNumber);
  }
}

console.log(`The largest number was ${max} and the smallest number was ${min}`);
