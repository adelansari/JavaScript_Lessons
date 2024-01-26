// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

let distance;
while (distance != 0) {
  distance = Number(prompt('Input distance in km:'));
  if (distance == 0) break;

  let time = Number(prompt('Input time in hours:'));
  let averageSpeed = distance / time;
  console.log(averageSpeed);
}
